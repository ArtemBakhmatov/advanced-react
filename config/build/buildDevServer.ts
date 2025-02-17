import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port: options.port,
		open: true, // автоматическое открытие браузера по запуска webpack
		historyApiFallback: true // любую страницу можно перезагружить без ошибки в нужным маршрутом
	}
}