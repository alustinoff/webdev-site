const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config ={
	output: {
		filename: './bundle.js'
	},
	// plugins: [
	// 	new UglifyJSPlugin({
	// 		sourceMap: false
	// 	})
	// ],
	/*plugins: [
	  new webpack.ProvidePlugin({
	    $: "jquery",
	    jQuery: "jquery",
	    "window.jQuery": "jquery"
	  })
	],*/
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
	    }
	  ]
	}
};

module.exports = config;