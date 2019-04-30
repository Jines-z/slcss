const gulp         = require('gulp'),
      path         = require('path'),
      changed      = require('gulp-changed'),
      cleanCSS     = require('gulp-clean-css'),
      autoPreFixer = require('autoprefixer'),
      postCss      = require('gulp-postcss'),
      sass         = require('gulp-sass')

const SRC_DIR  = path.resolve(__dirname, 'src'),
      LIB_DIR  = path.resolve(__dirname, 'lib')

gulp.task('scss', function () {
    return gulp.src([SRC_DIR + '/**/*.scss'])
        .pipe(changed(LIB_DIR))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(LIB_DIR))

})

gulp.task('min-scss', function () {
    return gulp.src([SRC_DIR + '/**/*.scss'])
        .pipe(changed(LIB_DIR))
        .pipe(sass().on('error', sass.logError))
        .pipe(postCss([autoPreFixer({
            browsers: ['last 4 version', 'Android >= 4.0'],
            cascade: false,
            remove: true
        })]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(LIB_DIR))

})

gulp.task('default', ['scss'], function () {
    gulp.watch(SRC_DIR + '/**/*.scss', ['scss'])
})
