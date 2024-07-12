import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {buildMode, BuildPaths} from "./config/build/types/types";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode: buildMode = 'development'

const isDevelopment: boolean = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig(
    {
        mode,
        paths,
        isDevelopment,
    }
)

export default config;