<template>
    <div id="app">
        <h1>我是一个vue组件</h1>
        <!-- <demo /> -->
        <router-link to="/">首页</router-link>
        <router-link to="demo">Demo</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
// import demo from "./components/demo.vue";
export default {
    components: {
        // demo,
    },
};
</script>

<style>
</style>