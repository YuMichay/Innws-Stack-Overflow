import path from 'path';
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(paths: BuildOptions['paths']): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  }
}