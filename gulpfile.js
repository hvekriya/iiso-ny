var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy', function() {
  gulp.src([
      'node_modules/bootstrap/dist/**/*',
      '!**/npm.js',
      '!**/bootstrap-theme.*',
      '!**/*.map'
    ])
    .pipe(gulp.dest('public/vendor/bootstrap'))

  gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('public/vendor/jquery'))

  gulp.src(['node_modules/popper.js/dist/umd/popper.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('public/vendor/popper'))
  
  gulp.src(['css/**'])
    .pipe(gulp.dest('public/css'))

  gulp.src(['js/**'])
  .pipe(gulp.dest('public/js'))

  gulp.src(['img/**'])
  .pipe(gulp.dest('public/img'))

  gulp.src(['*.html'])
  .pipe(gulp.dest('public/'))
})

// Default task
gulp.task('default', ['copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
  // Reloads the browser whenever HTML or CSS files change
  gulp.watch('css/*.css', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});
