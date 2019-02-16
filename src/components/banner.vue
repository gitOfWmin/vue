<template>
    <!--<div class="m-slider" data-ydui-slider>-->
        <!--<div class="slider-wrapper">-->
            <!--<div class="slider-item">-->
                <!--<a href="javascript:;">-->
                    <!--<img src="../assets/img/banner/banner-001.jpg">-->
                <!--</a>-->
            <!--</div>-->
            <!--<div class="slider-item">-->
                <!--<a href="javascript:;">-->
                    <!--<img src="../assets/img/banner/banner-002.jpg">-->
                <!--</a>-->
            <!--</div>-->
            <!--<div class="slider-item">-->
                <!--<a href="javascript:;">-->
                    <!--<img src="../assets/img/banner/banner-003.jpg">-->
                <!--</a>-->
            <!--</div>-->
            <!--<div class="slider-item">-->
                <!--<a href="javascript:;">-->
                    <!--<img src="../assets/img/banner/banner-004.jpg">-->
                <!--</a>-->
            <!--</div>-->
            <!--<div class="slider-item">-->
                <!--<a href="javascript:;">-->
                    <!--<img src="../assets/img/banner/banner-005.jpg">-->
                <!--</a>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="slider-pagination"></div>-->
    <!--</div>-->

    <swipe class="my-swipe m-slider" data-ydui-slider :speed="300" :auto="autotime">
        <swipe-item class="slider-item">
            <a href="javascript:;">
                <img src="../assets/img/banner/banner-001.jpg">
            </a>
        </swipe-item>
        <swipe-item class="slider-item">
            <a href="javascript:;">
             <img src="../assets/img/banner/banner-002.jpg">
            </a>
        </swipe-item>
        <swipe-item class="slider-item">
            <a href="javascript:;">
                <img src="../assets/img/banner/banner-003.jpg">
            </a>
        </swipe-item>
        <swipe-item class="slider-item">
            <a href="javascript:;">
                <img src="../assets/img/banner/banner-004.jpg">
            </a>
        </swipe-item>
        <swipe-item class="slider-item">
            <a href="javascript:;">
                <img src="../assets/img/banner/banner-005.jpg">
            </a>
        </swipe-item>
    </swipe>
</template>

<script>
    import 'vue-swipe/dist/vue-swipe.css';
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        name: "banner",
        data(){
            return {
                autotime:2000
            }
        },
        components:{
            swipe:Swipe,
            'swipe-item':SwipeItem
        }
    }
</script>

<style scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slider-item {
        height:inherit;
        background-color: #0089dc;
        color: #fff;
    }

    /*.slide2 {*/
        /*background-color: #ffd705;*/
        /*color: #000;*/
        /*height:inherit;*/
    /*}*/

    /*.slide3 {*/
        /*background-color: #ff2d4b;*/
        /*color: #fff;*/
        /*height:inherit;*/
    /*}*/

    /*.m-slider {*/
        /*overflow-x: hidden;*/
        /*width: 100%;*/
        /*position: relative;*/
    /*}*/

    /*.slider-wrapper {*/
        /*display: -webkit-box;*/
        /*display: -webkit-flex;*/
        /*display: -ms-flexbox;*/
        /*display: flex;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*-webkit-transform: translate3d(0px, 0px, 0px);*/
        /*transform: translate3d(0px, 0px, 0px);*/
        /*position: relative;*/
        /*z-index: 1;*/
        /*-webkit-transition-property: -webkit-transform;*/
        /*transition-property: -webkit-transform;*/
        /*transition-property: transform;*/
        /*transition-property: transform, -webkit-transform;*/
    /*}*/

    /*.slider-item {*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*-webkit-flex-shrink: 0;*/
        /*-ms-flex-negative: 0;*/
        /*flex-shrink: 0;*/
        /*background: #f6f6f6;*/
    /*}*/

    .slider-item img {
        width: 100%;
        height: auto;
        display: block;
        border: none;
    }

    /*.slider-pagination {*/
        /*text-align: right;*/
        /*position: absolute;*/
        /*width: 100%;*/
        /*z-index: 2;*/
        /*right: 0;*/
        /*bottom: 10px;*/
        /*pointer-events: none;*/
        /*display: -webkit-box;*/
        /*display: -webkit-flex;*/
        /*display: -ms-flexbox;*/
        /*display: flex;*/
        /*-webkit-box-align: end;*/
        /*-webkit-align-items: flex-end;*/
        /*-ms-flex-align: end;*/
        /*align-items: flex-end;*/
        /*-webkit-box-pack: center;*/
        /*-webkit-justify-content: center;*/
        /*-ms-flex-pack: center;*/
        /*justify-content: center;*/
    /*}*/

    /*.slider-pagination > .slider-pagination-item {*/
        /*margin: 0 .25rem;*/
        /*width: 8px;*/
        /*height: 8px;*/
        /*display: inline-block;*/
        /*border-radius: 100%;*/
        /*background-color: rgba(255,255,255,0.4);*/
        /*border: 1px solid #fff;*/
    /*}*/

    /*.slider-pagination > .slider-pagination-item.slider-pagination-item-active {*/
        /*background-color: #fff;*/
        /*border-radius: 100%;*/
    /*}*/
</style>