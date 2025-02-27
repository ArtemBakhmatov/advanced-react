import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // автоматическое открытие браузера по запуска webpack
    historyApiFallback: true, // любую страницу можно перезагружать без ошибки в нужным маршрутом
    hot: true, // обновлять все виды модулей во время выполнения без
    // необходимости полного обновления
  };
}
