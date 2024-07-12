import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {buildMode, BuildPaths, BuildEnv} from "./config/build/types/types";


export default (env: BuildEnv): webpack.Configuration => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const mode: buildMode = env.mode || "development";
    const isDevelopment: boolean = mode === 'development';
    const port: number = env.port || 3000

    return buildWebpackConfig(
        {
            mode,
            paths,
            isDevelopment,
            port
        }
    )
}