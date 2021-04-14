var StringReplacePlugin = require("string-replace-webpack-plugin");
const webpack = require("webpack");
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    var appTarget = process.env.REACT_APP_MARCA || 'dotz';

    const customConfig = {
        ...config,
        module: {
            ...config.module,
            rules: [
                ...config.module.rules,
                { 
                    test: /\.s[ac]ss$/i,
                    loader: StringReplacePlugin.replace({
                        replacements: [
                            {
                                pattern: /(.*)MINHA_MARCA(.*)/,
                                replacement: function (match, p1, p2, offset, string) {
                                    const brand = p1 + process.env.REACT_APP_MARCA + p2;
                                    return brand;
                                }
                            }
                    ]})
                }
            ]
        },
        plugins: [
            ...config.plugins,
            new StringReplacePlugin(),
            new WebpackShellPlugin({
                onBuildStart:['node theme-replace.js']
            })
            /*new webpack.NormalModuleReplacementPlugin(
                /(.*)-MINHA_MARCA(\.*)/,
                function (resource) {
                  resource.request = resource.request.replace(
                    /-MINHA_MARCA/,
                    `-${appTarget}`
                  );
                }
            ),*/
        ]
    }

    return customConfig;
}