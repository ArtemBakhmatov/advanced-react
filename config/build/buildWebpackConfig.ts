import webpack from "webpack";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode, isDev } = options;

	return {
		mode: mode,
		entry: paths.entry, // стартовая точка нашего приложения
		output: {
			filename: '[name].[contenthash].js',	// название файла готового приложения
			path: paths.build, // куда будет делаться сборка, build -> это папка
			clean: true, // чистит не нужные файлы в папке build
		}, // куда будем делать сборку нашего приложения
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined, // мы увидим где в коде произошла ошибка
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}