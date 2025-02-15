import webpack from "webpack";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode } = options;

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
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	}
}