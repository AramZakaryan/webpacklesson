import {BuildOptions} from "./types/types";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode, isDevelopment} = options
    return {
        entry: paths.entry,
        devtool: isDevelopment ? 'inline-source-map' : undefined,
        devServer: isDevelopment ? buildDevServer(options) : undefined,
        mode: mode,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: '[contenthash].[name].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths.html),
    }
}