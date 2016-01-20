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


//
//var concat = require('gulp-concat');

var webpack = require('gulp-webpack');

var paths = {
  sourceRoot: path.join(__dirname, 'src'),
  src: ['src/**/*.js', 'src/**/*.ts'],
  watch: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.json'],
  dist: 'dist',
  test: 'dist/test/test.js',
  dest: {
    pack: 'pack'
  }
};


var webpackOptions = {
  output: {
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  }
  //,
  //externals: {
  //  Backbone: {
  //    root: 'Backbone',
  //    amd: 'Backbone'
  //  }
  //},
  //module: {
  //  loaders: [
  //    { test: /\.hbs$/, loader: "handlebars-loader" }
  //  ]
  //}
};

gulp.task('default', ['test', 'watch']);

gulp.task('clean', function(cb) {
  return del(paths.dist, cb);
});


gulp.task('babel', ['clean'], function () {
	var tsProject = ts.createProject("tsconfig.json");
	
	var tsResult = gulp.src('src/**/*.ts')
		.pipe(sourcemaps.init())
    .pipe(ts(tsProject));
	
	var babelResult = gulp.src('src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('.', { sourceRoot: paths.sourceRoot }));
	
	return merge([
    tsResult.dts
			.pipe(rename(function(pth) {
        if(pth.dirname === 'lib') {
          pth.dirname = '';
        }
        else {
          pth.dirname = pth.dirname.replace('lib' + path.sep, '');
        }
        return pth;
      }))
			.pipe(gulp.dest('dist/definitions')),
    tsResult.js
      .pipe(babel())
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

gulp.task('pack', ['dist'], function () {
  return gulp.src(paths.dist + '/lib' + '/index.js')
    .pipe(webpack(webpackOptions))
    .pipe(gulp.dest(paths.dest.pack));
});

gulp.task('test', ['pack'], function() {
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

