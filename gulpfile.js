let gulp = require("gulp");
let uglify = require("gulp-uglify")

gulp.task('release', function (cb) {
    let stream = gulp.src(['./pinyin.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
    return stream
})

gulp.start('release')