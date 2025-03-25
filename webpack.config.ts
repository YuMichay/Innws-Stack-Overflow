import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildWebpack } from './config/buildWebpack';
import { BuildMode, BuildPlatform, BuildPaths } from './config/types/types';

interface Env {
  mode?: BuildMode;
  port?: number;
  platform?: BuildPlatform;
}

export default (env: Env) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src/app/index.tsx'),
    html: path.resolve(__dirname, 'public/index.html'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
  }

  const config: webpack.Configuration = buildWebpack({mode: env.mode ?? 'development', port: env.port ?? 9000, paths, platform: env.platform ?? 'desktop'});
  return config;
};