<template>
    <div class="loading">
      <h3>已经在努力喽……</h3>
    </div>
</template>

<script>
    export default {
        name: "loading",
        props:{
          text:{//文本的配置 text为自定义
            type:String,
            default:'loading'
          }
        }
    }
</script>

<style scoped>
    .loading{
        width: 160px;
        height: 50px;
        position: absolute;
        left:50%;
        top: 50%;
        margin-top: -25px;
        margin-left: -80px;
    }
</style>
