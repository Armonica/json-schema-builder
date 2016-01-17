var gulp = require('gulp');
//var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var del = require('del');

//ts
var ts = require("gulp-typescript");
//var gulpFilter = require('gulp-filter');
//var ext_replace = require('gulp-ext-replace');
var rename = require("gulp-rename");
var merge = require('merge2');

var babelOptions = {
  // http://babeljs.io/docs/usage/experimental/
  stage: 1,

  // http://babeljs.io/docs/usage/runtime/
  optional: ['runtime'],

  // http://babeljs.io/docs/advanced/transformers/#optional

  // whitelist: [],
  blacklist: []
};

var paths = {
  sourceRoot: path.join(__dirname, 'src'),
  src: ['src/**/*.js', 'src/**/*.ts'],
  watch: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.json'],
  dist: 'dist',
  test: 'dist/test/test.js'
}

gulp.task('default', ['test', 'watch']);

gulp.task('clean', function(cb) {
  del(paths.dist, cb);
});


gulp.task('babel', ['clean'], function () {
	var tsProject = ts.createProject("tsconfig.json");
	
	var tsResult = gulp.src('src/**/*.ts')
		.pipe(sourcemaps.init())
    .pipe(ts(tsProject));
	
	var babelResult = gulp.src('src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel(babelOptions))
      .pipe(sourcemaps.write('.', { sourceRoot: paths.sourceRoot }));
	
	return merge([
    tsResult.dts
			.pipe(rename({dirname: ''}))
			.pipe(gulp.dest('dist/definitions')),
    tsResult.js
      .pipe(babel(babelOptions))
			.pipe(sourcemaps.write('.', { sourceRoot: paths.sourceRoot }))
			.pipe(gulp.dest(paths.dist)),
		babelResult
			.pipe(gulp.dest(paths.dist))
    ]);
});

gulp.task('dist', ['babel'], function() {
  return gulp.src(['src/**/*', '!**/*.js', '!**/*.ts'], {base: 'src'})
    .pipe(gulp.dest(paths.dist));
});

gulp.task('test', ['dist'], function() {
//gulp.task('test', function() {
  return gulp.src(paths.test, {read: false})
    .pipe(mocha({ reporter: 'dot' }));
    ; //.on('error', gutil.log);
});

gulp.task('watch', function () {
  gulp.watch(paths.watch, ['test']);
});

gulp.task('generate-testsuite', ['dist'], function() {
  var testSuite = require('./dist/test/testsuite');
  testSuite.generate('./src/test/testsuite');
});

