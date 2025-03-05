import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpg|gif|woff2|woff)$/,
    use: [
      {
        loader: 'file-loader',
        options: {},
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  // если не используем typeScript - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/, // будет обрабатывать файлы ts и tsx (https://regex101.com)
    use: 'ts-loader', // даёт возможность чтобы работал ts
    exclude: /node_modules/, /// исключаем node_modules
  };

  return [ // обрабатывают файлы за рамки js, то есть ts, img и т.д.
    svgLoader,
    fileLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
}
