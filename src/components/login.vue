<template>
    <div id="login">
        <p><a href="javascript:;" style="color: gray; margin: -30px;text-decoration: none;" onclick="window.history.go(-1)">&lt;返回</a></p>
        <form action="" >
            <label for="username">用户名：</label>
            <input id="username" type="text" v-model="username" key="username" />
            <br/>
            <label for="password">密码：</label>
            <input id="password" type="text" v-model="password"/>
            <br/>
            <router-link to="act"><input type="submit" :value="type"></router-link>
        </form>
           <p style="text-align: right;">还没有账号？点击  <router-link to="/reg" style="color: #fa6509;" @click="type = '注册'">注册&gt;&gt;&gt;</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                username:"",
                password:"",
                type:"登陆",
                act:'/login'
            }
        }
    }
</script>

<style scoped>
    #login{
        width: 70%;
        margin: 0 auto;
        /*line-height: 1.5;*/
    }
    #login label{
        display: block;
        width: 100%;
        height: 40px;
        line-height: 60px;
        text-align: left;
        color: #fa6509;
    }
    #login input{
        border: 1px solid #fa6509;
        background: #fa6509;
        width: 100%;
        height: 30px;
        color: #fff;
    }
    #login input[type="submit"]{
        margin: 30px auto;
        float: none;
    }
</style>