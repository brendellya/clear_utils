var gulp    = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var DEST = 'dist/';
var src = 'src/clear.js';

gulp.task('default', function(){
   return gulp.src(src)
       .pipe(browserify({
           insertGlobals: true
       }))
       .pipe(gulp.dest(DEST))
       .pipe(uglify())
       .pipe(rename({ extname: '.min.js'}))
       .pipe(gulp.dest(DEST))
});


