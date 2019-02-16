<template>
    <footer class="aui-footer aui-footer-fixed">
        <router-link to="/home" class="aui-tabBar-item" active-class="aui-tabBar-item-active">
            <span class="aui-tabBar-item-icon">
                <i class="icon icon-home"></i>
            </span>
            <span class="aui-tabBar-item-text">首页</span>
        </router-link>
        <router-link to="/collage" class="aui-tabBar-item " active-class="aui-tabBar-item-active">
            <span class="aui-tabBar-item-icon">
                <i class="icon icon-collage"></i>
            </span>
            <span class="aui-tabBar-item-text">拼团</span>
        </router-link>
        <router-link to="/member" class="aui-tabBar-item " active-class="aui-tabBar-item-active">
            <span class="aui-tabBar-item-icon">
                <i class="icon icon-my"></i>
            </span>
            <span class="aui-tabBar-item-text">我的</span>
        </router-link>
    </footer>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>

</style>