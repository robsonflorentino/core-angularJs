var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var mainbowerfiles = require('main-bower-files');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

var gulpFilter = require('gulp-filter');

var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var filelog = require('gulp-filelog');

var rimraf = require('gulp-rimraf');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      port: 8000
    }));
});
