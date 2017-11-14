const path = require('path');

module.exports = {
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
    }]
  },
  devtool: 'cheap-module-source-map'
};

