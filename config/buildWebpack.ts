import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack({ mode, port, paths, platform }: BuildOptions): webpack.Configuration {
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(port) : undefined,
    plugins: buildPlugins({ mode, paths, platform }),
    module: {
      rules: buildLoaders(mode),
    },
    resolve: buildResolvers(paths),  
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    }
  };
}