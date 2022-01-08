const pkg = JSON.parse(require('fs').readFileSync('./package.json'));
const CommonjsPlug = require('@etcpack/commonjs-plug');

module.exports = {

    // 打包入口
    entry: './src/main.ts',

    // 打包出口
    output: 'build/main@v' + pkg.version + '.js',

    // 对导入路径重定向
    redirect: {
        'nefbl': "./src/lib/nefbl.js"
    },

    loader: [{
        test: /\.(css|scss)$/,
        handler: ['@etcpack/plain-loader', '@etcpack/scss-loader']
    }, {
        test: /\.(html|c)$/,
        handler: ['@etcpack/plain-loader']
    }, {
        test: /\.(ts|js)$/,
        handler: [function (source) {
            if (/node_modules/.test(this.filepath) && !/sprout-ui/.test(this.filepath)) return source;
            return require('@babel/core').transformFileSync(this.filepath, require('./babel.config')).code;
        }]
    }],

    plug: [
        new CommonjsPlug()
    ]
};
