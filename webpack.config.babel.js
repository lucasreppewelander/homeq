import path from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CleanUpCssMiniPlugin from './webpack/CleanUpCssMiniPlugin';

module.exports = (ENV = 'development') => ({
	entry: './src',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',	
	devServer: {
		contentBase: './dist'
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [new TerserPlugin({
			parallel: true,
			cache: './.build_cache/terser',
			terserOptions: {
				warnings: false,
				mangle: false, // <- this needs to be fixed!
				ie8: false,
				output: {
					comments: false
				}
			}
		})]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]__[local]___[hash:base64:5]"  
						}
					}
				]
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: [
					ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(svg|jpg|png)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: ENV === 'production' ? './css/[name].css' : './css/[name].[hash].css',
			chunkFilename: ENV === 'production' ? './css/[id].css' : './css/[id].[hash].css'
		}),
		new CleanUpCssMiniPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				ENV: JSON.stringify(ENV),
				NODE_ENV: JSON.stringify(ENV)
			}
		}),
		new HtmlPlugin({
			template: './assets/template.html',
			options: {
				minimize: true
			}		
		})
	]
});
