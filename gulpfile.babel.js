import gulp from 'gulp';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
browserSync.create();

const PATHS = {
  OUT: './dist',
  JS_SRC: './src/**/*.js',
  JS_ENTRY: './src/app.js',
  HTML_SRC: 'src/index.html'
};

const bundle = bundler => {
  return bundler
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .on('error', function(e) {
      gutil.log(e)
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(PATHS.OUT))
    .pipe(browserSync.stream());
};

gulp.task('watch', function() {
  watchify.args.debug = true;
  const watcher = watchify(browserify(PATHS.JS_ENTRY, watchify.args));
  bundle(watcher);

  watcher.on('update', function() {
    bundle(watcher);
  });

  watcher.on('log', gutil.log);

  browserSync.init({
    server: PATHS.OUT,
    logFileChanges: false
  });
});

gulp.task('js', function() {
  return bundle(browserify(PATHS.JS_ENTRY));
});

gulp.task('copy', function () {
  return gulp
    .src(PATHS.HTML_SRC)
    .pipe(gulp.dest(PATHS.OUT));
});