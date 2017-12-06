const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader', //run babel
        test: /\.js$/, //on all js files
        exclude: /node_modules/ //except the ones in node modules
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProduction ? 'source-map' :'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  }
};

