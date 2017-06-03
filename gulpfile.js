const gulp = require('gulp')
const ts = require('gulp-typescript')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('ts', function () {
  const tsResult = gulp.src('src/**/*.ts').pipe(tsProject())
  return tsResult.js.pipe(gulp.dest('dist'))
})

gulp.task('watch', function () {
  gulp.watch('src/**/*.ts', ['ts'])
})

gulp.task('build', ['ts'])
gulp.task('dev', ['build', 'watch'])
gulp.task('default', ['build'])
