<template>
    <section class="aui-scrollView">
        <list :list="list" :dataName="'collage'"></list>
    </section>
</template>

<script>
    import list from './list';

    export default {
        name: "collage",
        components:{
           list
        },
        data(){
            return {
                list:[]
            }
        },
        created(){
            let url = `/data/collage.json`;
            this.$http({
                url:url
            }).then(
                (res)=>{
                    this.list = res.data;
                    // console.log('collage:===',this.List)
                }
            )
        }
    }
    // $(document).ready(function() {
    //     $(".main_img").touchSlider({
    //         flexible: true,
    //         speed: 200,
    //         btn_prev: $("#btn_prev"),
    //         btn_next: $("#btn_next"),
    //         paging: $(".point a"),
    //         counter: function(e) {
    //             $(".point a").removeClass("on").eq(e.current - 1).addClass("on");
    //             $(".img_font span").hide().eq(e.current - 1).show();
    //         }
    //     });
    //
    // });

</script>

<style scoped>

</style>