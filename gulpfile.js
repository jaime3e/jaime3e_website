
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
	process.stdout.write(''+ '\n');
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/main.scss', ['sass']);
});

