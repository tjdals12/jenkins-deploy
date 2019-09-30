const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	name: 'For prod',
	mode: 'production',
	devtool: 'source-map',
	resolve: {
		extensions: [ '.jsx', '.js' ],
		modules: [ path.resolve(__dirname, '../src'), 'node_modules' ]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html', filename: 'index.html' }),
		new MiniCssExtractPlugin({ filename: 'style.css' }),
		new CleanWebpackPlugin()
	],
	entry: {
		app: [ '@babel/polyfill', './src/index', './src/styles/reduction.scss' ]
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: false
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			{
				test: /\.(scss|sass)/,
				exclude: /node_modules/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'app.js'
	}
};
