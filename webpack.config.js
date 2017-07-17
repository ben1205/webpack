var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool:'eval-source-map',//配置生成Source Maps,选择合适的选项
	entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
	output: {
		path : __dirname + "/build",//打包后的文件存放的地方
		filename : "bundle.js"//打包后输出文件的文件名
	},
	module:{
		loaders :[
			{
				test : /\.json$/,
				loader:"json-loader"
			},
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader:'babel-loader',//在webpack的module部分的loader里进行配置即可
				query:{
					presets:['es2015', 'react']
				}
			},
			{
				test:/\.css$/,
				// exclude: /node_modules/,
				loader:'style-loader!css-loader?modules',//添加对样式表的处理
				// use : [
				// 	{
				// 		loader:'style-loader',
				// 	},
				// 	{
				// 		loader:'css-loader',
				// 		options:{
				// 			sourceMap:true,
				// 			importLoaders:1,
				// 		}
				// 	},
				// 	{
				// 		loader:'postcss-loader',
				// 		options:{
				// 			sourceMap: 'inline',
				// 		}
				// 	}
				// ]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"//new一个这个插件的实例，并传入相关的参数
		})
	],

	devServer:{
		port:8080,
		historyApiFallback : true,//不跳转
		inline:true,//实时刷新
		hot:true
	}
}