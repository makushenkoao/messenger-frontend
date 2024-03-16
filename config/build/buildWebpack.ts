import webpack from 'webpack';

import { BuildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {
        mode,
        isDev,
        paths: { entry, output },
    } = options;

    return {
        mode: mode ?? 'development',
        entry,
        output: {
            path: output,
            filename: '[name].[contenthash].js',
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
