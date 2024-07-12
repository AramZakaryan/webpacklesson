import {BuildOptions} from "./types/types";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode} = options
    return {
        entry: paths.entry,
        devtool: 'inline-source-map',
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