const gulp = require('gulp');
const babel = require('gulp-babel');
// 걸프 의존성을 여기 씁니다.

gulp.task('default', async function() {
    // 걸프 작업을 여기 씁니다.
    console.log('gulp default 실행!');
    // 노드 소스
    gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
    // 브라우저 소스
    gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));

    console.log('gulp default 실행 완료!');
});