'use strict';
var path = require('path');
// http://jslog.com/2014/10/02/react-with-webpack-part-1/
module.exports = {
    entry: [
        "./src/dev.js"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //tell webpack to use babel to compile all *.jsx/*.js files
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            // style
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules'
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [path.join(__dirname, 'src')]
    },
    plugins: []
};
