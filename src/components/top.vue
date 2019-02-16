<template>
    <header class="aui-navBar aui-navBar-fixed" id="tt">
        <a href="javascript:;" class="aui-navBar-item">
            <i class="icon"></i>
        </a>
        <div class="aui-center">
            <span class="aui-center-title">{{ $root.$data.title }}</span>
        </div>
        <a href="javascript:;" class="aui-navBar-item">
            <i class="icon icon-sys"></i>
        </a>
    </header>
</template>

<script>
    export default {
        mounted(){
            // document.getElementById('tt').scrollTop = 0
            // console.log()
        }

    }
</script>

<style scoped>
    /*.aui-navBar-fixed{*/
        /*width: 100%;*/
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/
    /*}*/
</style>