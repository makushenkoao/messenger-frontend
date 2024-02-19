const fs = require('fs');
const path = require('path');

function toCamelCase(str) {
    return str
        .replace(/_./g, (match) => match.charAt(1).toUpperCase())
        .replace(/^./, (match) => match.toUpperCase());
}

const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error(
        'You need to pass two arguments: the route name and the page name',
    );
    process.exit(1);
}

const routeName = args[0];
const pageName = args[1];

const routerFilePath = path.resolve(
    __dirname,
    '..',
    '..',
    'src/shared/const/router.ts',
);

const routerFileContent = fs.readFileSync(routerFilePath, 'utf-8');

if (routerFileContent.includes(routeName.toUpperCase())) {
    console.error(`A route named ${routeName} already exists`);
    process.exit(1);
}

const updatedEnum = `${routerFileContent.replace(
    /export enum AppRoutes {/,
    `export enum AppRoutes {\n    ${routeName.toUpperCase()} = '${routeName.toLowerCase()}',`,
)}`;

const updatedFunctions = `
export const getRoute${toCamelCase(
    routeName,
)} = () => '/${routeName.toLowerCase()}';
`;

fs.writeFileSync(routerFilePath, updatedEnum + updatedFunctions);

console.log(`Route ${routeName} was successfully added to the router.ts file`);

const routerConfigFilePath = path.resolve(
    __dirname,
    '..',
    '..',
    'src/app/providers/router/config/routeConfig.tsx',
);

const routerConfigFileContent = fs.readFileSync(routerConfigFilePath, 'utf-8');

const updatedRouterConfig = `
import { ${pageName} } from '@/pages/${pageName}';
import { getRoute${toCamelCase(routeName)} } from '@/shared/const/router';

${routerConfigFileContent.replace(
    /export const routeConfig: Record<AppRoutes, RouteProps> = {/,
    // eslint-disable-next-line max-len
    `export const routeConfig: Record<AppRoutes, RouteProps> = {\n  [AppRoutes.${routeName.toUpperCase()}]: {\n    path: getRoute${toCamelCase(
        routeName,
    )}(),\n    element: <${pageName} />, \n  },`,
)}
`;

fs.writeFileSync(routerConfigFilePath, updatedRouterConfig);

console.log(
    `Route ${routeName} was successfully added to the routerConfig.tsx file`,
);
