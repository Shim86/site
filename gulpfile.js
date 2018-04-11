var gulp = require('gulp');
var sass= require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./sass/'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./**/*.scss',['sass']);
});
