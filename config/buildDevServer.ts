import path from 'path';
import { BuildOptions } from './types/types';
import { Configuration } from 'webpack';

export function buildDevServer(port: BuildOptions['port']): Configuration['devServer'] {
  return {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: port ?? 9000,
    historyApiFallback: true,
    open: true,
    hot: true,
  }
}