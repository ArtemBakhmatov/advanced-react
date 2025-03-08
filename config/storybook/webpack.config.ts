/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */

import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  // Инициализация config.resolve, если он не существует
  if (!config.resolve) {
    config.resolve = {};
  }

  // Инициализация config.resolve.modules, если он не существует
  if (!config.resolve.modules) {
    config.resolve.modules = [];
  }

  // Инициализация config.resolve.extensions, если он не существует
  if (!config.resolve.extensions) {
    config.resolve.extensions = [];
  }

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // Инициализация config.module, если он не существует
  if (!config.module) {
    config.module = {};
  }

  // Инициализация config.module.rules, если он не существует
  if (!config.module.rules) {
    config.module.rules = [];
  }

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules
    // eslint-disable-next-line max-len
    .filter((rule): rule is RuleSetRule => !!rule && typeof rule === 'object' && !Array.isArray(rule))
    .map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildCssLoader(true));

  return config;
};
