const fs = require('fs/promises');

const resolveRoot = require('../resolveRoot');
const createUI = require('./createUI');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
    try {
        await fs.mkdir(resolveRoot('src', layer, sliceName));
    } catch (e) {
        console.log(`Failed to create directory for slice${sliceName}`);
    }

    await createUI(layer, sliceName);
    await createPublicApi(layer, sliceName);
};
