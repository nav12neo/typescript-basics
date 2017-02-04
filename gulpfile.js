var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");

var paths = {
    pages: ['src/*.html'],
    sass: ['src/sass/**/*.scss'],
    out: 'out',
    outhtml: 'out/*.html',
    css: 'out/css',
    outjsloc: "out/scripts",
    ts: ['src/scripts/main.ts']
};
gulp.task('copyHtml', function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest(paths.out));
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.css));
});

gulp.task('connect', function() {
    connect.server({
        root: paths.out,
        livereload: true
    });
});
gulp.task('html', function() {
    gulp.src(paths.outhtml)
        .pipe(connect.reload());
});

gulp.task("typescript", ["copyHtml"], function(cb) {
    return browserify({
            basedir: '.',
            debug: true,
            entries: paths.ts,
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.outjsloc));
});

gulp.task('watch', function() {
    gulp.watch(paths.outhtml, ['html']);
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('build', ['typescript', 'copyHtml', 'sass', 'connect', 'watch']);