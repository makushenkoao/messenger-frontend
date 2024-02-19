import { BuildOptions } from '../../build/types/types';

interface buildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export const buildBabelLoader = (options: buildBabelLoaderProps) => {
    const { isDev, isTsx } = options;

    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    ['@babel/plugin-transform-runtime'],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
};
