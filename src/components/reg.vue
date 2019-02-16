<template>
    <div id="login">
        <!--<login></login>-->
        <p><a href="javascript:;" style="color: gray; margin: -30px;text-decoration: none;" onclick="window.history.go(-1)">&lt;返回</a></p>
        <form action="/reg" >
            <label for="username">用户名：</label>
            <input id="username" type="text" v-model="username" />
            <br/>
            <label for="password">密码：</label>
            <input id="password" type="text" v-model="password"/>
            <br/>
            <button type="button">注册</button>
        </form>
        <p style="text-align: right;">已经有账号？点击  <router-link to="/login" style="color: #fa6509;" >登陆&gt;&gt;&gt;</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "reg",
        data(){
            return {
                username:"",
                password:"",
                act:'/reg'
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
    #login input,button{
        border: 1px solid #fa6509;
        background: #fa6509;
        width: 100%;
        height: 30px;
        color: #fff;
    }
   button{
        margin: 30px auto;
        float: none;
    }
</style>