const path = require('path')
const glob = require('glob')
// 用于做相应的merge处理
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const { DefinePlugin } = require('webpack')

const resolve = dir => {
  return path.join(__dirname, dir)
}
let pages = {}
function getPages () {
  glob.sync('./src/pages/*/*.js').forEach(filepath => {
    let fileList = filepath.split('/')
    let fileName = fileList[fileList.length - 2]
    pages[fileName] = {
      entry: `src/pages/${fileName}/main.js`,
      // 模板来源
      template: `src/pages/${fileName}/${fileName}.html`,
      title: "vue-multipage",
      // 在 dist/index.html 的输出
      filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : `${fileName}.html`,
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  return pages
}

module.exports = {
  pages:getPages(),
  chainWebpack: config => {
    config.module
        .rule('images')
          .use('url-loader')
          .tap(options =>
              merge(options, {
                limit: 100,
              })
          )

      config.resolve.alias
          .set('@', resolve('src'))
          .set('styles', resolve('src/assets/styles'))
          .set('images', resolve('src/assets/images'))
          .set('components', resolve('src/components'))
          .set('pages', resolve('src/assets/pages'))
          .set('api', resolve('src/api'))
          .set('utils', resolve('src/utils'))
    //删除console插件
      let plugins = [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console:true,
              drop_debugger:true
            },
            output:{
              // 去掉注释内容
              comments: false,
            }
          },
          sourceMap: false,
          parallel: true,
        })
      ];
      //打包文件带hash
      config.output.filename('[name].[hash].js').end(); 
  },
  configureWebpack: config => {
    // 开发环境不需要gzip
    if (process.env.NODE_ENV === 'development') return
    config.plugins.push(
      new CompressionWebpackPlugin({
        // 正在匹配需要压缩的文件后缀
        test: /\.(js|css|svg|woff|ttf|json|html)$/,
        // 大于5kb的会压缩
        threshold: 5120
        // 其余配置查看compression-webpack-plugin
      })
    )
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  }
}
