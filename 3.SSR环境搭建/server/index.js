const express = require('express');
const server = express();
// const { createRenderer } = require('vue-server-renderer');
const { createBundleRenderer } = require('vue-server-renderer');
// const { default: createApp } = require('../dist/server.bundle.js');
const fs = require('fs');
const { resolve } = require('path');

const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

server.use(express.static(resolve('../dist'), { index: false }));

server.get('*', async (req, res) => {
    try {
        // 1. 创建 Vue 实例
        // const app = createApp();
        // 2. 创建渲染器
        const render = createBundleRenderer(serverBundle, {
            template: fs.readFileSync('./index.ssr.html', 'utf-8'),
            clientManifest,
        });
        // const html = await render.renderToString(app);
        const html = await render.renderToString();
        res.send(html);
        // 3. 利用渲染器将 Vue 实例转化成 html 字符串
    } catch (error) {
        console.log(error);
        res.status(500).send('服务器错误');
    }
    // res.send('hello');
});

server.listen(3601, () => console.log('server listen to 3601'));
