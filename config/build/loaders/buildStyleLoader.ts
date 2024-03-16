import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildStyleLoader(isDev: boolean) {
    return {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resPath: string) =>
                                    Boolean(resPath.includes('.module.')),
                                localIdentName: isDev
                                    ? '[path][name]__[local]--[hash:base64:5]'
                                    : '[hash:base64:8]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    };
}
