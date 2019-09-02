const { src, dest, parallel, watch } = require("gulp");
const twig = require("gulp-twig");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

function html() {
  return src(["./src/*.twig", "!./src/_*.twig"])
    .pipe(
      twig({
        data: {
          hotInfo:
            "Самые лучшие предложения по цене могут быть доступны несколько часов, а некоторые не более часа.Бронируйте оперативно онлайн — иначе по туру который вы смотрите улетит кто- то другой!",
          hot: [
            {
              name: "Chang Club",
            },
            {
              name: "Chang Residence Patong Hotel",
            },
            {
              name: "Bangkok Residence Patong",
            },
            {
              name: "Туры в Sharaya Residence Patong (Ex.asialoop G-House)",
            },
            {
              name: "Sharaya Boutique (Ex. Issara Resort)",
            },
            {
              name: "On Hotel Phuket",
            },
            {
              name: "Silk Hill Hotel",
            },
            {
              name: "Azure Phuket (Ex. Sunshine Patong)",
            },
          ],
        },
      })
    )
    .pipe(dest("./public"));
}

function css() {
  return src("./src/css/*.scss")
    .pipe(sass())
    .pipe(dest("./public/css"));
}

function watchFiles() {
  watch("./src/css/*.scss", css);
  watch("./src/*.twig", html);
}

// function js() {
//   return src('client/javascript/*.js', { sourcemaps: true })
//     .pipe(concat('app.min.js'))
//     .pipe(dest('build/js', { sourcemaps: true }))
// }

// exports.js = js;
exports.css = css;
exports.html = html;
exports.watch = watchFiles;
exports.default = parallel(html, css);
