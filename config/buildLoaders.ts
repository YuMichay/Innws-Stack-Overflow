import { ModuleOptions } from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildMode } from './types/types';
import { buildBabelLoader } from './babel/buildBabelLoader';

export function buildLoaders(mode: BuildMode): ModuleOptions['rules'] {
  const isDev = mode === 'development';

  const babelLoader = buildBabelLoader({ mode });

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
        },
      },
    }, "sass-loader"],
  };

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { 
      icon: true,
      svgoConfig: {
        plugins: [
          {
            name: 'convertColors',
            params: {
              currentColor: true,
            }
          }
        ]
      }
    } }],
  };

  return [sassLoader, assetsLoader, svgLoader, babelLoader];
}