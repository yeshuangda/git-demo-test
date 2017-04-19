/**
 * Created by macbook on 2017/4/16.
 */
var gulp=require("gulp");
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task("genxinhtml",function () {
    gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
        .pipe(reload({stream: true}));
})
gulp.task('genxincss',function () {
    gulp.src('src/css/*.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('dist/css/'))
        .pipe(reload({stream: true}));
})
gulp.task('genxinjs',function () {
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js/'))
})

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch('src/css/*.css',['genxincss']);
    gulp.watch('src/js/*.js',['genxinjs']);
    gulp.watch('src/index.html',['genxinhtml']);
});