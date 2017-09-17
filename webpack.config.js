var webpack = require('webpack' );
var path = require('path');

module.exports = {
    entry: 'server.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './',
    ],
    resolve: {
        extensions: ['.js'],
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
            },
        ]  
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};