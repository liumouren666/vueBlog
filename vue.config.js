const path = require('path')
const port = process.env.port || process.env.npm_config_port || 8080 // dev port
module.exports = {
  // 基本路径
  publicPath: '/vueBlog',
  // 构建时的输出目录
  outputDir: 'dist',
  // 放置静态目录
  assetsDir: 'public',
  //文件名哈希 布尔值
  filenameHashing: true,
  //eslint检查 布尔值是否在保存的时候使用 `eslint-loader` 进行检查。 有效的值：`ture` | `false` | `"error"`  当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: false,
  // css: {

  //     // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)

  //     // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象

  //     extract: true,

  //     // 是否开启 CSS source map？

  //     sourceMap: false,

  //     // 为预处理器的 loader 传递自定义选项。比如传递给

  //     // Css-loader 时，使用 `{ Css: { ... } }`。

  //     loaderOptions: {

  //         css: {

  //             // 这里的选项会传递给 css-loader

  //         },

  //         postcss: {

  //             // 这里的选项会传递给 postcss-loader

  //         }

  //     },

  //     // 为所有的 CSS 及其预处理文件开启 CSS Modules。

  //     // 这个选项不会影响 `*.vue` 文件。

  //     modules: false

  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
  },
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   // http://chanwingwah.info/api/api/blog/list  目标地址
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: 'http://chanwingwah.info/', // 本地代理地址
    //     changeOrigin: true // 支持跨域
    //   }
    // }
  }
}


