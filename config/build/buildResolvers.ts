import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers(
    options: BuildOptions,
): Configuration['resolve'] {
    const { paths } = options;

    return {
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
        mainFiles: ['index'],
        alias: {
            '@': paths.src,
        },
    };
}
