<template>
    <div>
        <NuxtLogo />
        <h1>我是主页面</h1>
        <nuxt-link to="about">About 页面</nuxt-link>
        <el-row>
            <el-col>
                <el-date-picker
                    v-model="value2"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                >
                </el-date-picker>
            </el-col>
            <el-col>
                <el-color-picker v-model="color1"></el-color-picker>
            </el-col>
        </el-row>

        <el-button type="primary">主要按钮</el-button>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
};
</script>
