<template>
    <section class="aui-scrollView">
        <banner></banner>
        <list :list="lists" :dataName="'home'"></list>
        <!--<List :List="home" :dataName="'home'"></List>-->
    </section>
</template>

<script>
    import banner from './banner';
    import list from './list'
    // import {mapGetters} from 'vuex';

    export default {
        name: "home",
        components:{
           banner,list
        },
        data(){
            return {
                lists:[]
            }
        },
        // computed:mapGetters([
        //     'home'
        // ]),
        mounted(){
            let url = `/data/index.json`;
            // this.$store.dispatch('UPDATE_HOME',url);
            this.$http({
                url:url
            }).then(
                (res)=>{
                    this.lists =res.data;
                    console.log(this.lists)
                }
            )
        }
    }
</script>

<style scoped>

</style>