const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'vue-sync-state',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'postcss-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }, {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true
          }
        }
      ]
    }, {
      test: /\.styl(us)?$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader',
        'stylus-loader'
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}
