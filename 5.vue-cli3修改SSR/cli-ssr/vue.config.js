const { defineConfig } = require('@vue/cli-service');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';
const target = TARGET_NODE ? 'server' : 'client';

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: () => {
        return {
            entry: {
                app: `./src/entry/${target}.entry.js`,
            },
            target: TARGET_NODE ? 'node' : 'web',
            output: {
                libraryTarget: TARGET_NODE ? 'commonjs' : undefined,
            },
            plugins: [
                TARGET_NODE
                    ? new VueSSRClientPlugin()
                    : new VueSSRClientPlugin(),
            ],
        };
    },
    chainWebpack: (config) => {
        config.optimization.splitChunks(undefined);
    },
});
