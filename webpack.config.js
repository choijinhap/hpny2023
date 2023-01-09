const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	target: 'web',
	devtool: 'eval-cheap-source-map',
	entry: {
		app: path.resolve(__dirname, './src/index.ts'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
		publicPath: '/',
		// clear output directory before exporting bundle files
		// don't need 'clean-webpack-plugin' anymore
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [],
	optimization: {},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', 'ts', '.json', '.jsx', '.tsx', '.css'],
	},
};
