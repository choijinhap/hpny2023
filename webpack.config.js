const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
	mode: 'development',
	target: 'web',
	devtool: 'eval-cheap-source-map',
	entry: {
		app: path.resolve(__dirname, './src/index.ts'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
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
				test: /\.(scss|sass|css)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'), // 읽어올 템플릿 경로 지정
			publicPath: '',
		}),
		new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
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
		alias: {
			src: path.resolve(__dirname, 'src'),
		},
	},
};
