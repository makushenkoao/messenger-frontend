import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

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
