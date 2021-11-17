const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const pug = {
//   test: /\.pug$/,
//   use: ['html-loader?attrs=false', 'pug-html-loader']
// };

//const isDev = process.env.NODE_ENV === 'development';

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './app.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 4200,
    static: path.join(__dirname, 'src'),
    // hot: true,
    // inline: true
    // dry: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.pug',
      // inject: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      
      // {
      //   test: /\.(s[ac]ss|css)$/,
      //   use: [
      //   {loader: MiniCssExtractPlugin.loader},
      //   {loader: 'css-loader'
      // },
      //   {loader: 'sass-loader'},
      //   ]
      // },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.pug$/,
      //   use: ['pug-loader']
      // }, 
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: false
        }
      },
//        {
//   test: /\.pug$/,
//   use: [{
//     loader: 'html-loader'
//   }, {
//     loader: 'pug-html-loader',
//     options: {
//       exports: false
//     }
//   }]
// },
    //   {
    //     test: /\.html$/,
    //     exclude: /node_modules/,
    //     loader: 'html-loader'
    // }, 
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   loader: 'file-loader',
      //   options:{
      //     name: ('[name].[contenthash].[ext]'), // filename = (name, ext) => isDev ? `${name}.${ext}` : `${name}.[hash].${ext}`;
      //     outputPath :  'static/images/'
      //   }
      // },
       {
        test: /\.(woff2|woff|ttf)$/,
        type: 'asset/resource',
        generator: {
         filename: 'static/fonts/[hash][ext][query]'
       }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
         filename: 'static/images/[hash][ext][query]'
       }
      },
      // {
      //   test: /\.svg$/,
      //   exclude: path.resolve(__dirname, './src/webfonts'),
      //   use: ['@svgr/webpack'],
      // },
    ]
  }
}

module.exports = config;