const Version = new Date().getTime()

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/components/themes/_handle.scss";`
            }
        },
        // 是否使用css分离插件 ExtractTextPlugin
        extract: {
            // 修改打包后css文件名   // css打包文件，添加时间戳
            filename: `static/css/[name].${Version}.css`, // 此处static/css/xxx 目录根据自己打包情况来定,我使用的就没有static一层,所以直接去掉static即可。根据自己项目决定
            chunkFilename: `static/css/[name].${Version}.css`
        }
    },
    configureWebpack: {
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            // filename: utils.assetsPath('js/[name].[chunkhash].'+Version+'js'),
            // chunkFilename: utils.assetsPath('js/[id].[chunkhash].'+Version+'js')
            filename: `static/js/[name].${Version}.js`, // js打包文件，添加时间戳
            chunkFilename: `static/js/[name].${Version}.js`
        }
    },
    chainWebpack(config) {
        // img的文件名修改   // img打包文件，添加时间戳
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => {
                options.name = `static/img/[name].${Version}.[ext]`
                options.fallback = {
                    loader: 'file-loader',
                    options: {
                        name: `static/img/[name].${Version}.[ext]`
                    }
                }
                return options
            })
    }
}