const express = require('express');
const Vue = require('vue');
const serverRender = require('vue-server-renderer');
const fs = require('fs');

const server = express();

// 定义配置对象，表示页面相关信息：title、meta...

const data = {
    title: '这是模板页',
    meta: `<meta name="description" content="Vue.js 服务器渲染指南"></meta>`,
};

// server.get('*', (req, res) => {
//     // 1. 创建 vue 实例
//     const app = new Vue({
//         data() {
//             return {
//                 msg: 'hello ssr',
//             };
//         },
//         template: '<div>{{msg}}</div>',
//     });

//     // 希望有一个方法，可以将vue实例转化为html字符串
//     // vue-server-renderer

//     // 创建一个渲染器
//     const render = serverRender.createRenderer();
//     // 调用 renderToString(vue实例，回调函数)
//     render.renderToString(app, (err, html) => {
//         res.send(html);
//     });
// });

server.get('*', async (req, res) => {
    try {
        // 1. 创建 vue 实例
        const app = new Vue({
            data() {
                return {
                    msg: 'hello ssr',
                };
            },
            template: '<div>{{msg}}</div>',
        });

        // 希望有一个方法，可以将vue实例转化为html字符串
        // vue-server-renderer

        // 创建一个渲染器
        const render = serverRender.createRenderer({
            template: fs.readFileSync('./index.html', 'utf-8'),
        });
        // 调用 renderToString(vue实例，回调函数)
        // render.renderToString(app, (err, html) => {
        //     res.send(html);
        // });
        const html = await render.renderToString(app, data);
        // res.send(`<!DOCTYPE html>
        //     <html lang="en">
        //     <head>
        //         <meta charset="UTF-8">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //         <title>Document</title>
        //     </head>
        //     <body>
        //         ${html}
        //     </body>
        //     </html>`);
        res.send(html);
    } catch (error) {
        console.log(error);
    }
});

server.listen(12345, () => {
    console.log('server is running at 12345');
});

// 遗留问题
// 1. 页面失活
// 2. 开发时组件怎么写