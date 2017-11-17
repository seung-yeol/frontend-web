//gulpfile.js

var gulp = require('gulp');
var uglify = require('gulp-uglify');
// var pump = require('pump');
var concat = require('gulp-concat');

gulp.task('js', function() {
    var src = [
      'js/lib/config.js'
      ,'js/src/util.js'
      ,'js/src/TodoModel.js'
      ,'js/src/TodoCollection.js'
      ,'js/src/TodoView.js'
      ,'js/src/tmpl.js'
      ,'js/main.js'];

    // pump([
    //   gulp.src(src),
    //   uglify(),
    //   gulp.dest('build')
    // ])

    return gulp.src(src)
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('build'))
    //npx gulp js 실행하면 build 폴더에 all.js파일 생김
});
