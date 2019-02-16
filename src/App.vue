<template>
  <div id="app">
   <section class="aui-flexView">
        <loading v-show="$root.$data.bLoading"></loading>
        <top v-show="$root.$data.topS"></top>
        <!--<loading v-show="bLoading"></loading>-->
        <!--<top v-show="topS"></top>-->
        <transition
        enter-active-class="animated headShake"
        >
            <router-view></router-view>
        </transition>
     <!--<bottom v-show="bottomS"></bottom>-->
     <bottom v-show="$root.$data.bottomS"></bottom>
   </section>

  </div>
</template>

<script>
  import top from './components/top';
  import bottom from './components/bottom'

  // import {mapGetters} from 'vuex';
  // import * as types from './store/types.js'

  export default {
      name:"app",
      components:{
         top,bottom
      },
      methods:{
          checkRouterChange(to){
              let path=to.path;
              // console.log('变化了',path)

              // if(/home|collage|member/.test(path)){//home|follow|column
              //     this.$store.dispatch(types.VIEW_NAV,true)
              //     this.$store.dispatch(types.VIEW_FOOT,true)
              // }
              // if(/order|address|login|reg|detail/.test(path)){//login|reg|detail
              //     this.$store.dispatch(types.VIEW_NAV,false)
              //     this.$store.dispatch(types.VIEW_FOOT,false)
              // }
              // if(/user/.test(path)){//user
              //     // this.$store.dispatch(types.VIEW_FOOT,true)
              //     // this.$store.dispatch(types.VIEW_NAV,false)
              // }
              if(/home/.test(path)){
                  this.$root.$data.title = "超值拼团";
                  this.$root.$data.topS = true
                  this.$root.$data.bottomS = true
              }
              if(/collage/.test(path)){
                  this.$root.$data.title = "拼团";
                  this.$root.$data.topS = true
                  this.$root.$data.bottomS = true
              }
              if(/member/.test(path)){
                  this.$root.$data.title = "个人中心"
                  this.$root.$data.topS = true
                  this.$root.$data.bottomS = true
              }
              if(/order|address|detail/.test(path)){
                  this.$root.$data.topS = false
                  this.$root.$data.bottomS = false
              }
          }
      },
      watch:{
          $route:{
              deep:true,
              immediate:true,
              handler:'checkRouterChange'
          }
      },
      // computed:mapGetters([
      //     'topS','bottomS','bLoading'
      // ])

  }


</script>
<style>

</style>
