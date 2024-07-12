import path from "path";
import webpack from "webpack";
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    mode: 'development',
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
        filename: '[contenthash].[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,

    },
    plugins: buildPlugins(),
};

export default config;