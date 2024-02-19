const fs = require('fs/promises');

const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const styleTemplate = require('./styleTemplate');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) =>
        resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log('Failed to create ui directory');
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(componentName));
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplate(componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.module.scss`),
                styleTemplate(componentName),
            );

            if (layer === 'pages') {
                await fs.writeFile(
                    resolveUIPath(componentName, `${componentName}.async.ts`),
                    `import { lazy } from 'react';
export const ${componentName}Async = lazy(async () => await import('./${componentName}'));
`,
                );

                await fs.writeFile(
                    resolveUIPath(componentName, `${componentName}.tsx`),
                    `import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './${componentName}.module.scss';

const ${componentName} = () => {
    
    return (
        <div className={classNames(cls.${componentName}, {})}>
           
        </div>
    );
};
export default ${componentName};
`,
                );
            }
        } catch (e) {
            console.log('Failed to create component');
        }
    };

    await createUIDir();
    await createComponent();
};
