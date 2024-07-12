import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export const buildPlugins = (htmlPath: string): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({template: htmlPath}),
        new webpack.ProgressPlugin()
    ]
}