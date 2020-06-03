var gulp = require('gulp');
		styles = require('gulp-sass');
		clean = require('gulp-clean-css');
		autoprefixer = require('gulp-autoprefixer');
		sourcemaps = require('gulp-sourcemaps');
		rename = require('gulp-rename');
		concat = require('gulp-concat');
		uglify = require('gulp-uglify');
		livereload = require('gulp-livereload');

var paths = {
	src: {
		js: 'src/js/**/*.js',
		scss: 'src/scss/app.scss',
		scssWatch: 'src/scss/**/*.scss'
	},
	dest: {
		js: 'assets/js/',
		scss: 'assets/css/'
	}
}

gulp.task('styles', function() {
	return gulp.src(paths.src.scss)
		.pipe(sourcemaps.init())
		.pipe(styles({
			errLogToConsole: true
		}))
		.pipe(clean())
		.pipe(autoprefixer())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.dest.scss))
		.pipe(livereload());
});

gulp.task('js', function() {
	return gulp.src(paths.src.js)
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.dest.js))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(paths.src.scssWatch, gulp.series(['styles']));
	gulp.watch(paths.src.js, gulp.series(['js']));
});

gulp.task('default', gulp.parallel(['styles', 'js', 'watch']));
