
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify= require('gulp-uglify');
var plumber= require('gulp-plumber');



gulp.task('default', ['sass','scripts','sass:watch','scripts:watch']);


gulp.task('scripts',function(){
	gulp.src('./src/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('./build/js'));
});

gulp.task('sass', function () {
	process.stdout.write(''+ '\n');
  return gulp.src('./src/sass/main.scss')
  	.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/main.scss', ['sass']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./src/js/*.js', ['scripts']);
});

