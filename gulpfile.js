var gulp    = require('gulp'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),

    DEST = 'dist/',
    src = 'src/clear.js';


    gulp.task('webserver', function () {
       connect.server({
            livereload: true
       });
    });

    gulp.task('reload', function(){
        gulp.src('*.html')
            .pipe(connect.reload());
    });

    gulp.task('watch', function () {
        gulp.watch(['*.html', 'docs/*.md', 'src/*.js'],['dev']);
    });


    gulp.task('build', function(){
       return gulp.src(src)
           .pipe(browserify({
               insertGlobals: true
           }))
           .pipe(gulp.dest(DEST))
           .pipe(uglify())
           .pipe(rename({ extname: '.min.js'}))
           .pipe(gulp.dest(DEST))
    });


    gulp.task('dev', ['reload', 'watch', 'build']);
    gulp.task('default', ['webserver', 'reload', 'watch', 'build']);

