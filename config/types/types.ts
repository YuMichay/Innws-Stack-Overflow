export interface BuildPaths {
  src: string;
  entry: string;
  html: string;
  public: string;
  output: string;
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'desktop' | 'mobile';

export interface BuildOptions {
  mode?: BuildMode;
  port?: number;
  paths?: BuildPaths;
  platform?: BuildPlatform;
}