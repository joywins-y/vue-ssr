<template>
    <div id="components-layout-demo-basic">
        <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-conetnt>
                <nuxt />
            </a-layout-conetnt>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
export default {};
</script>

<style>
#components-layout-demo-basic {
    text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
}
</style>