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
	/*module: {
         rules: [
             {
                 test: '/es5/bundle.js',
                 exclude: /(node_modules)/,
                 use: {
                 	loader: 'babel-loader',
	               	 // options: {
	                 //     presets: ['@babel/preset-env']
	                 // }
                 }
                 
             }
         ]
     },*/
     // stats: {
     //     colors: true
     // },
};

module.exports = config;