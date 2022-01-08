module.exports = {

    "presets": [["@babel/preset-env", {

        // 我不希望import这样的语句被转义
        "modules": false

    }], "@babel/typescript"],

    "plugins": [

        // 装饰器
        ["@babel/plugin-proposal-decorators", {
            "legacy": true
        }],

        // 类属性
        "@babel/proposal-class-properties",

        // 对象展开
        "@babel/proposal-object-rest-spread"

    ]

};
