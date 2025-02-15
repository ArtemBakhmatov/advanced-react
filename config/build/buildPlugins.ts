import webpack from "webpack"; // для доступа к встроенным плагинам
import HtmlWebpackPlugin from "html-webpack-plugin";

import { BuildOptions } from "./types/config";

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html // откуда берем шаблон это public/index.html
		}), // в папке build создается файл index.html
		new webpack.ProgressPlugin() // предоставляет отчет о компиляции
	]
}