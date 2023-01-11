const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'), // 읽어올 템플릿 경로 지정
			publicPath: '',
		}),
	],
	optimization: {},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		historyApiFallback: {
			index: 'index.html',
		},
		compress: true,
		open: true,
		hot: true,
		port: 8000,
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.ts', '.json', '.jsx', '.tsx', '.css'],
	},
};
