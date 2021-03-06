module.exports = {
    outputDir: __dirname + '/server/public',
    publicPath:process.env.NODE_ENV === 'production' ? '/admin/' : '/',
    devServer: {
        disableHostCheck: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        // eslint-disable-next-line no-dupe-keys
        open: true,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    },
}