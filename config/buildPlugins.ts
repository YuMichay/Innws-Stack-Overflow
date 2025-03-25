import webpack, { Configuration } from 'webpack';
import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import { BuildOptions } from './types/types';

export function buildPlugins({ mode, paths, platform }: BuildOptions): Configuration['plugins'] {
  const htmlPlugin = new HtmlWebpackPlugin({
    template: paths.html,
    favicon: path.resolve(paths.public, 'code.svg'),
  });

  const cssPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  const definePlugin = new webpack.DefinePlugin({PLATFORM: JSON.stringify(platform)});

  const copyPlugin = new CopyPlugin({
    patterns: [
      { 
        from: path.resolve(paths.public, 'locale'), 
        to: path.resolve(paths.output, 'locale') 
      },
    ],
  });

  const plugins: Configuration['plugins'] = [htmlPlugin, definePlugin];
  
  if (mode === 'production') {
    plugins.push(cssPlugin, copyPlugin);
  }

  return plugins;
}