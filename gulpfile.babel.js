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
import browserSync from 'browser-sync';
browserSync.create();

const Paths = {
  OUT: './dist',
  JS_SRC: './src/**/*.js',
  JS_ENTRY: './src/app.js',
  HTML_SRC: 'src/index.html',
  SASS_SRC: './src/scss/**/*.scss',
  SASS_OUT: './dist/assets/css'
};

const release = argv.release || false;
const development = !release;
const watch = argv.watch || false;

gulp.task('clean', () => {
  return gulp.src(Paths.OUT, { read: false }).pipe(clean());
});

const bundle = bundler => {
  return bundler
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .on('error', function(e) {
      gutil.log(e)
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(development, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(development, sourcemaps.write()))
    .pipe(gulpif(release, uglify().on('error', gutil.log)))
    .pipe(gulp.dest(Paths.OUT))
    .pipe(gulpif(watch, browserSync.stream()));
};

gulp.task('build:js', () => {
  if (watch || development) {
    watchify.args.debug = true;
    const watcher = watchify(browserify(Paths.JS_ENTRY, watchify.args));
    bundle(watcher);

    watcher.on('update', () => {
      bundle(watcher);
    });

    watcher.on('log', gutil.log);

    browserSync.init({
      server: Paths.OUT,
      logFileChanges: false
    });
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


  return gulp.src([Paths.SASS_SRC])
    .pipe(gulpif(development, sourcemaps.init()))
    .pipe(sass().on('error', gutil.log))
    .pipe(postCss(postCssProcessors))
    .pipe(gulpif(development, sourcemaps.write()))
    .pipe(gulpif(release, cleanCss({ advanced: false })))
    .pipe(gulp.dest(Paths.SASS_OUT))
    .pipe(gulpif(watch, browserSync.stream()));
});

gulp.task('lint:js', () => {
  return gulp.src([Paths.JS_SRC])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:scss', () => {
  return gulp.src([Paths.SASS_SRC]).pipe(stylelint({
    reporters: [
      { formatter: 'string', console: true }
    ]
  }));
});

gulp.task('copy:html', () => {
  return gulp
    .src(Paths.HTML_SRC)
    .pipe(gulp.dest(Paths.OUT));
});

gulp.task('bundle', ['copy:html', 'sass', 'build:js'], () => {
  gulp.watch(Paths.SASS_SRC, ['sass']);
});

gulp.task('build', () => sequence('clean', 'bundle'));

gulp.task('default', ['build']);