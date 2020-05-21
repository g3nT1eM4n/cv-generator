module.exports = [
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/react',
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/transform-runtime',
            '@babel/syntax-dynamic-import'
          ]
        }
      },
      'ts-loader'
    ]
  },
  {
    test: /\.s*css$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.less$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true
        }
      }
    ],
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loaders: ['url-loader?mimetype=application/font-woff']
  },
  {
    test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loaders: ['url-loader?mimetype=application/font-ttf']
  },
  {
    test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loaders: ['url-loader?mimetype=application/font-eot']
  },
  {
    test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loaders: ['url-loader?mimetype=application/font-svg']
  },
  {
    test: /\.(png|jpe?g|gif)$/,
    loaders: ['file-loader']
  }
]
