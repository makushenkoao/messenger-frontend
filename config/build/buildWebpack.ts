import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {
        mode,
        isDev,
        paths: { entry, output },
    } = options;

    return {
        mode: mode ?? 'development',
        entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            path: output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
