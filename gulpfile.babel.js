// NPM Dependencies
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import mocha from 'gulp-mocha';

// Mocha task
gulp.task('test', () => {
  return gulp.src([
    'test/**/*Test.js'
  ])
  .pipe(babel())
  .pipe(mocha());
});

// Linter task
gulp.task('analyze', () => {
  return gulp.src([
    'src/**/*.js',
    'test/**/*Test.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});
