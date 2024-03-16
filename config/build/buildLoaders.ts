import { ModuleOptions } from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const { mode } = options;

    const isDev = mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });
    const svgLoader = buildSvgLoader();
    const styleLoader = buildStyleLoader(isDev);

    return [
        assetLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        styleLoader,
    ];
}
