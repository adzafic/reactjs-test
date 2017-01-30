var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

const sync = browserSync.create();
gulp.task('scripts',function(){
  browserify('./src/App.js')
    .transform('reactify')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/'))
    .pipe(sync.reload)
});

gulp.task('default',['scripts']);
