const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  mode: 'development',
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
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
