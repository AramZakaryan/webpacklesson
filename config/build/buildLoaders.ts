import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {

    const tsloader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssloaders = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ]
    }

    return [tsloader, scssloaders]
}