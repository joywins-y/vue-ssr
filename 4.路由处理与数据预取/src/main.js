import Vue from 'vue';
import App from './app.vue';
import createRouter from './router';
import createStore from './store';

// new Vue({
//     el: '#app',
//     render: (h) => h(App),
// });

export default function () {
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        el: '#app',
        render: (h) => h(App),
        router,
        store,
    });
    return { app, router, store };
}
