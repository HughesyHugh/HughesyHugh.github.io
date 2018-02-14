var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('./site/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .on('error', function(errorInfo) {
  	console.log(errorInfo.toString());
  	this.emit('end');
	})
  .pipe(gulp.dest('./site/prod/styles'));
});

gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "./"
	}
	});

	watch('./index.html', function() {
		gulp.start('HTMLBrowserRefresh');
	});

	watch('./site/assets/styles/**/*.css', function() {
		gulp.start('CSSBrowserInject');
	});
});

gulp.task('CSSBrowserInject', ['styles'], function() {
	return gulp.src('./site/prod/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('HTMLBrowserRefresh', function() {
	browserSync.reload();
});
	
