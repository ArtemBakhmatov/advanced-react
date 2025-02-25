import webpack from "webpack"; // для доступа к встроенным плагинам
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html // откуда берем шаблон это public/index.html
		}), // в папке build создается файл index.html
		new webpack.ProgressPlugin(), // предоставляет отчет о компиляции
		new MiniCssExtractPlugin({ // при сборке создается отдельный файл css, без него всё будет в js
			filename: 'css/[name].[contenthash:8].css', // название файла с хешем
			chunkFilename: 'css/[name].[contenthash:8].css' // для асинхронности, будет несколько файлов
		}),
		new webpack.DefinePlugin({ // тут опрокидываем глобальные переменные
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}