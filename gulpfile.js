var gulp					= require('gulp');
var sass					= require('gulp-sass');
var browserSync		= require('browser-sync').create();



gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.+(scss|sass)')// Gets all files ending with .scss and .sass in app/scss and children dirs
				.pipe(sass()) // Convert Sass to CSS with gulp-sass
				.pipe(gulp.dest('app/css'))
				.pipe(browserSync.reload({
					stream: true, 
				}))
});

gulp.task('browserSync', function() {
	browserSync.init(
	{
		server: 
		{
			baseDir: 'app'
		},
	});
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/scss/**/*.+(scss|sass)', ['sass', browserSync.reload]);
	// Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});

