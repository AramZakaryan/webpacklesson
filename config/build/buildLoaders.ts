import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {

    const tsloader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [tsloader]
}