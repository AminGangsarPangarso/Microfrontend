const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { plugins } = require('../products/webpack.config')

module.exports={
    mode:"development",
    devServer:{
        port:8082
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'mycart',
            filename : 'remoteEntry.js',
            exposes:{
               './cartIndex': './src/index'
            }
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    
    ]
}


