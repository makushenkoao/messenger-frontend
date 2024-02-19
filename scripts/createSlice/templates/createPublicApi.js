// createPublicApi.js

const fs = require('fs/promises');

const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
    const componentName = firstCharUpperCase(sliceName);

    try {
        if (layer === 'pages') {
            await fs.writeFile(
                resolveRoot('src', layer, sliceName, 'index.ts'),
                `export { ${componentName}Async as ${componentName} } from './ui/${componentName}/${componentName}.async';
`,
            );
        } else {
            await fs.writeFile(
                resolveRoot('src', layer, sliceName, 'index.ts'),
                `export { ${componentName} } from './ui/${componentName}/${componentName}';
`,
            );
        }
    } catch (e) {
        console.log('Failed to create public api');
    }
};
