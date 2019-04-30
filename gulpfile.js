const gulp         = require('gulp'),
      path         = require('path'),
      changed      = require('gulp-changed'),
      cleanCSS     = require('gulp-clean-css'),
      autoPreFixer = require('autoprefixer'),
      postCss      = require('gulp-postcss'),
      sass         = require('gulp-sass')

const SCSS_DIR  = path.resolve(__dirname, 'scss'),
      CSS_DIR  = path.resolve(__dirname, 'css')

gulp.task('scss', function () {
    return gulp.src([SCSS_DIR + '/**/*.scss'])
        .pipe(changed(CSS_DIR))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(CSS_DIR))

})

gulp.task('min-scss', function () {
    return gulp.src([SCSS_DIR + '/**/*.scss'])
        .pipe(changed(CSS_DIR))
        .pipe(sass().on('error', sass.logError))
        .pipe(postCss([autoPreFixer({
            browsers: ['> 1%', 'last 5 version', 'Android >= 4.0', 'iOS >= 8.0'],
            cascade: false,
            remove: true
        })]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(CSS_DIR))

})

gulp.task('default', ['scss'], function () {
    gulp.watch(SCSS_DIR + '/**/*.scss', ['scss'])
})
