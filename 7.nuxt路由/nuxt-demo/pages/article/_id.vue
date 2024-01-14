<template>
    <div>
        <!-- /article/:id -->
        <div>动态路由页面</div>
        <div>当前文章ID为{{ id }}</div>
    </div>
</template>

<script>
export default {
    validate({ params }) {
        console.log(params);
        // 返回值是boolean类型
        return /^\d+$/.test(params.id);
    },
    asyncData({ params }) {
        const id = params.id;
        return { id };
    },
};
</script>

<style>
</style>