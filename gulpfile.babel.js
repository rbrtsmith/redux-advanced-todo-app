import gulp from 'gulp';
import clean from 'gulp-clean';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import { argv } from 'yargs';
import sass from 'gulp-sass';
import postCss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import sequence from 'run-sequence';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import path from 'path';
import htmlClean from 'gulp-htmlclean';
import browserSync from 'browser-sync';
browserSync.create();

const Paths = {
  OUT:      'dist',
  JS_SRC:   'src/**/*.js',
  JS_ENTRY: 'src/app.js',
  HTML_SRC: 'src/index.html',
  SASS_SRC: 'src/scss/**/*.scss',
  SASS_OUT: 'dist/assets/css',
  IMG_SRC:  'src/assets/images/*.*',
  IMG_OUT:  'dist/assets/images/',
  SVG_SRC:  'src/assets/images/icons/*.svg',
  SVG_OUT:  'dist/assets/images/'
};

const release = argv.release || false;
const Flags = {
  RELEASE: release,
  DEV: !release,
  WATCH: argv.watch || false
};


gulp.task('clean', () => {
  return gulp.src(Paths.OUT, { read: false }).pipe(clean());
});


gulp.task('build:js', () => {
  const bundle = bundler => {
    return bundler
      .transform('babelify', { presets: ['es2015', 'react'] })
      .bundle()
      .on('error', function(e) {
        gutil.log(e)
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulpif(Flags.DEV, sourcemaps.init({ loadMaps: true })))
      .pipe(gulpif(Flags.DEV, sourcemaps.write()))
      .pipe(gulpif(Flags.RELEASE, uglify().on('error', gutil.log)))
      .pipe(gulp.dest(Paths.OUT))
      .pipe(gulpif(Flags.WATCH, browserSync.stream()));
  };

  if (Flags.WATCH || Flags.DEV) {
    watchify.args.debug = true;
    const watcher = watchify(browserify(Paths.JS_ENTRY, watchify.args));
    bundle(watcher);

    watcher.on('update', () => {
      bundle(watcher);
    });

    watcher.on('log', gutil.log);

  } else {
    bundle(browserify(Paths.JS_ENTRY));
  }
});


gulp.task('sass', () => {
  const postCssProcessors = [
    autoprefixer({
      browsers: [
        'last 2 versions',
        'ie 9-11',
        '> 5%'
      ],
      remove: false
    })
  ];

  return gulp.src(Paths.SASS_SRC)
    .pipe(gulpif(Flags.DEV, sourcemaps.init()))
    .pipe(sass().on('error', gutil.log))
    .pipe(postCss(postCssProcessors))
    .pipe(gulpif(Flags.DEV, sourcemaps.write()))
    .pipe(gulpif(Flags.RELEASE, cleanCss({ advanced: false })))
    .pipe(gulp.dest(Paths.SASS_OUT))
    .pipe(gulpif(Flags.WATCH, browserSync.stream()));
});


gulp.task('lint:js', () => {
  return gulp.src(Paths.JS_SRC)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('lint:scss', () => {
  return gulp.src(Paths.SASS_SRC).pipe(stylelint({
    reporters: [
      { formatter: 'string', console: true }
    ]
  }));
});


gulp.task('copy:html', () => {
  return gulp
    .src(Paths.HTML_SRC)
    .pipe(gulpif(Flags.RELEASE, htmlClean()))
    .pipe(gulp.dest(Paths.OUT))
    .pipe(gulpif(Flags.WATCH, browserSync.stream()));
});

gulp.task('copy:images', () => {
  gulp
    .src(Paths.IMG_SRC)
    .pipe(gulp.dest(Paths.IMG_OUT));
  browserSync.reload();
  return gulp;

});


gulp.task('create:svgSprite', () => {
  gulp.src(Paths.SVG_SRC)
    .pipe(svgmin(file => {
      const prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          cleanupIDs: {
            prefix: `${prefix}-`,
            minify: true
          }
        }]
      };
    }))
    .pipe(svgstore())
    .pipe(gulp.dest(Paths.SVG_OUT));
  browserSync.reload();
  return gulp;
});

gulp.task('browserSync:init', () => {
  if (Flags.WATCH) {
    browserSync.init({
      server: Paths.OUT,
      logFileChanges: false
    });    
  }
});


gulp.task('bundle', ['create:svgSprite', 'sass', 'build:js'], () => {
  if (Flags.WATCH) {
    gulp.watch(Paths.SVG_SRC, ['create:svgSprite']);
    gulp.watch(Paths.SASS_SRC, ['sass']);    
  }
});

gulp.task('copy', ['copy:html', 'copy:images'], () => {
  if (Flags.WATCH) {
    gulp.watch(Paths.HTML_SRC, ['copy:html']);
    gulp.watch(Paths.IMG_SRC, ['copy:images']);
  }
});

gulp.task('build', () => sequence('clean', 'browserSync:init', 'copy', 'bundle'));

gulp.task('default', ['build']);
