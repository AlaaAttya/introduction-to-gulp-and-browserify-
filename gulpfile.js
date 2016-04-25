var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
	gulp.src('./js/App.js')
	.pipe(browserify({}))
	.pipe(concat('build.js'))
	.pipe(gulp.dest('./dest'))
});