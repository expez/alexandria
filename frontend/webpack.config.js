var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: __dirname + '/src/',
    //publicPath: 'http://localhost:3000/assets/',
    filename: 'bundle.js',
    publicPath: '/src/'
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.less']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:[' +
          '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
          '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}'
      },
      {
        test: /\.less$/,
        loader: "style!css!less?strictMath&noIeCompat"
      },

      //{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.json$/, loaders: ['json']},

      // Needed for the css-loader when
      // [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  }
};
