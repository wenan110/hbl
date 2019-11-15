const gulp = require("gulp");
// html
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})
// images
gulp.task("images",function(){
    return gulp.src(["*.{png,jpg}","images/*.{png,jpg}"])
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
// js
gulp.task("script",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
// json 数据
gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/json"))
    .pipe(connect.reload());
})
// css
const scss = require("gulp-sass");
const minifySCC = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss",function(){
    return gulp.src("stylesheel/Main.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifySCC())
    .pipe(rename("Main.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("sass",function(){
    return gulp.src("stylesheel/Second.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifySCC())
    .pipe(rename("Second.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("iconfont",function(){
    return gulp.src("stylesheel/iconfont.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("third",function(){
    return gulp.src("stylesheel/third.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifySCC())
    .pipe(rename("third.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
// 执行多个任务
gulp.task("build",["copy-html","images","script","data","scss","sass","iconfont","third"])
// 监听
gulp.task("watch",function(){
    gulp.watch("*.html",['copy-html']);
    gulp.watch(["*.{png,jpg}","images/*.{png,jpg}"],['images']);
    gulp.watch(["*.js","!gulpfile.js"],['script']);
    gulp.watch(["*.json", "!package.json"], ['data']);
    gulp.watch("stylesheel/Main.scss", ['scss']);
    gulp.watch("stylesheel/Second.scss", ['sass']);
    gulp.watch("stylesheel/iconfont.scss", ['iconfont']);
    gulp.watch("stylesheel/third.scss", ['third']);
})
// 虚拟服务器
const connect = require("gulp-connect")
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:9999,
        livereload:true
    })
})
gulp.task("default",["watch","server"]);