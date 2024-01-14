<template>
    <div>
        <input type="text" v-model="val" />
        <p>输入框中的内容为：{{ val }}</p>
        <div class="button" @click="show">提交</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: "SSR",
        };
    },
    methods: {
        show() {
            alert(this.val);
        },
    },
};
</script>

<style scoped>
.button {
    width: 100px;
    height: 35px;
    background: lightcoral;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
    line-height: 35px;
    color: #fff;
}
</style>