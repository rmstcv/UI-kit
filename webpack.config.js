const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// const pug = {
//   test: /\.pug$/,
//   use: ['html-loader?attrs=false', 'pug-html-loader']
// };

const isDev = process.env.NODE_ENV === 'development';
console.log('IS DEV', isDev);

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: ["@babel/plugin-proposal-class-properties"]
    },
    // loader: 'eslint-loader',
    //             options: {
    //                 fix: true,
    //                 eslintPath: 'eslint',
    //                 emitError: true,
    //                 emitWarning: true
    //             }
  }]

  // if (isDev) {
  //   loaders.push('eslint-loader')
  // }
  return loaders
}

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './app.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  // resolve: {
  //   extensions: ['.js']
  // },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  devServer: {
    port: 4200,
    static: path.join(__dirname, 'src'),
    // hot: true,
    // inline: true
    // dry: true,
  },
  // externals: {
  //   jquery: 'jQuery'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.pug',
      // inject: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "assets/images", to: "assets/images" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff2|woff|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"]
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: false
        }
      },
      //  {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      //  {
      //           test: /jquery.+\.js$/,
      //           use: [{
      //               loader: 'expose-loader',
      //               options: 'jQuery'
      //           },{
      //               loader: 'expose-loader',
      //               options: '$'
      //           }]
      //       },
      // {
      //   test: /\.(s[ac]ss|css)$/,
      //   use: [
      //   {loader: MiniCssExtractPlugin.loader},
      //   {loader: 'css-loader'
      // },
      //   {loader: 'sass-loader'},
      //   ]
      // },

      // {
      //   test: /\.pug$/,
      //   use: ['pug-loader']
      // }, 

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
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: ('[name].[contenthash].[ext]'), // filename = (name, ext) => isDev ? `${name}.${ext}` : `${name}.[hash].${ext}`;
      //     outputPath: 'static/images/'
      //   }
      // },




      // {
      //   test: /\.svg$/,
      //   exclude: path.resolve(__dirname, './src/webfonts'),
      //   use: ['@svgr/webpack'],
      // },
    ]
  }
}

module.exports = config;
