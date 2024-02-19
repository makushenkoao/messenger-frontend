import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths } from './config/build/types/types';

interface EnvVariables {
    analyzer?: boolean;
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

function getApiUrl(mode: BuildMode, apiUrl?: string) {
    if (apiUrl) return apiUrl;
    if (mode === 'production') return '/api';
    return 'http://localhost:8000';
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
    };

    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const port = env?.port || 3000;
    const apiUrl = getApiUrl(mode, env?.apiUrl);

    return buildWebpack({
        analyzer: env.analyzer,
        mode,
        isDev,
        port,
        apiUrl,
        paths,
    });
};
