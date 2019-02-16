<template>
    <header class="aui-navBar aui-navBar-fixed">
        <a href="javascript:;" class="aui-navBar-item">
            <i class="icon"></i>
        </a>
        <div class="aui-center">
            <span class="aui-center-title">{{ title }}</span>
        </div>
        <a href="javascript:;" class="aui-navBar-item">
            <i class="icon icon-sys"></i>
        </a>
    </header>
</template>

<script>
    export default {
        name: "top",
        data(){
            return {
                title:'超值拼团'
            }
        }
    }
</script>

<style scoped>

</style>