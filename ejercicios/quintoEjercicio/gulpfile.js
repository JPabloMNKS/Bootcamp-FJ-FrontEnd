const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');

exports.default = function () {
  return src(['src/*.js']).pipe(uglify()).pipe(dest('output/'));
};