<template>
    <section class="aui-flexView">

        <!--顶部-->
        <header class="aui-navBar aui-navBar-fixed">
            <a href="javascript:history.back(-1)" class="aui-navBar-item">
                <i class="icon icon-return"></i>
            </a>
            <div class="aui-center">
                <span class="aui-center-title">超值1元团</span>
            </div>
            <a href="javascript:;" class="aui-navBar-item">
                <i class="icon icon-share" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}"></i>
            </a>
        </header>

        <section class="aui-scrollView">
            <div class="img_gallery" id="commodity">
                <div class="main_img">
                    <ul>
                        <!--<li>-->
                            <!--<img src="../assets/img/banner/goods-001.png" alt="">-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<img src="../assets/img/banner/goods-002.png" alt="">-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<img src="../assets/img/banner/goods-003.png" alt="">-->
                        <!--</li>-->
                        <li>
                            <img src="../assets/img/banner/goods-004.png" alt="">
                        </li>
                    </ul>
                </div>
                <!--<div class="img_font">-->
                    <!--<span>1/3</span>-->
                    <!--<span>2/3</span>-->
                    <!--<span>3/3</span>-->
                    <!--<span>4/4</span>-->
                <!--</div>-->
            </div>
            <div class="aui-box-gradual">
                <div class="aui-flex">
                    <div class="aui-time-price">
                        <i>￥</i>
                        9.9
                    </div>
                    <div class="aui-flex-box aui-text-lines">
                        <h3>￥29.9</h3>
                        <p>
                            <em class="aui-one">已团7.8k</em>
                            <em class="aui-two">2人团</em>
                        </p>
                    </div>
                    <div class="aui-time-box">
                        <p>距结束还剩</p>
                        <div class="time-item">
                            <span class="hour_show">00</span>
                            <em>:</em>
                            <span class="minute_show">00</span>
                            <em>:</em>
                            <span class="second_show">00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="aui-flex aui-flex-clear-line">
                <div class="aui-flex-box">
                    <h4>蒙自石榴水果*2个</h4>
                    <p>粉色玛瑙 天生丽质 好水果</p>
                </div>
                <div class="aui-share-box" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
                    <i class="aui-icon-share"></i>
                    <p>分享</p>
                </div>
            </div>
            <div class="aui-news-cox-box">
                <div class="aui-news-cox aui-flex">
                    <div class="aui-news-cox-red">
                        <img src="../assets/img/icon/icon-qmt.png" alt="">
                    </div>
                    <div class="aui-flex-box">新用户和老用户可参团，开团
                    </div>
                </div>
            </div>
            <div class="divHeight"></div>
            <div class="aui-coll-step  yd-step-theme1 clearfix">
                <p style="padding-bottom:20px; color:#ff3952">拼团玩法</p>
                <ul class="yd-step-content">
                    <li class="yd-step-item yd-step-item-current">
                        <em class="yd-step-checkmark">
                            <i></i>
                        </em>
                        <div class="yd-step-item-top">
                            <div class="yd-step-item-top-text">
                                <span></span>
                            </div>
                        </div>
                        <div class="yd-step-item-bottom">
                            <p>选择商品</p>
                            <p>完成下单</p>
                        </div>
                    </li>
                    <li class="yd-step-item yd-step-item-current">
                        <em class="">
                            <i>2</i>
                        </em>
                        <div class="yd-step-item-top">
                            <div class="yd-step-item-top-text">
                                <span></span>
                            </div>
                        </div>
                        <div class="yd-step-item-bottom">
                            <p>邀请好友</p>
                            <p>好友参团</p>
                        </div>
                    </li>
                    <li class="yd-step-item">
                        <em class="">
                            <i>3</i>
                        </em>
                        <div class="yd-step-item-top">
                            <div class="yd-step-item-top-text">
                                <span></span>
                            </div>
                        </div>
                        <div class="yd-step-item-bottom">
                            <p>参团成功</p>
                            <p>等待抽奖</p>
                        </div>
                    </li>
                    <li class="yd-step-item">
                        <em class="">
                            <i>4</i>
                        </em>
                        <div class="yd-step-item-top">
                            <div class="yd-step-item-top-text">
                                <span></span>
                            </div>
                        </div>
                        <div class="yd-step-item-bottom">
                            <p>中奖名单</p>
                            <p>即刻发货</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="divHeight"></div>
            <div class="aui-friend-coll">
                <div class="aui-friend-coll-head">
                    <h2>小伙伴发起的拼团,您可以直接参与</h2>
                </div>
                <a href="javascript:;"  class="aui-flex b-line">
                    <div class="aui-friend-img">
                        <img src="../assets/img/user/user-logo-003.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h4>AUI素材网</h4>
                    </div>
                    <div class="aui-friend-differ">
                        <h4>还差 <em>1</em>人成团</h4>
                        <h5>剩余:<em>15:44:43</em></h5>
                    </div>
                    <div class="aui-friend-button">
                        <button>去参团</button>
                    </div>
                </a>
                <a href="javascript:;"  class="aui-flex">
                    <div class="aui-friend-img">
                        <img src="../assets/img/user/user-logo-004.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h4>58素材网</h4>
                    </div>
                    <div class="aui-friend-differ">
                        <h4>还差 <em>2</em>人成团</h4>
                        <h5>剩余:<em>15:44:43</em></h5>
                    </div>
                    <div class="aui-friend-button">
                        <button>去参团</button>
                    </div>
                </a>
            </div>
            <div class="divHeight"></div>
            <div class="aui-login-line">
                <h2>商品详情</h2>
            </div>
            <div class="aui-page-box">
                <p>
                    <img src="../assets/img/ad/cp-001.png" alt="">
                </p>
                <p>
                    <img src="../assets/img/ad/cp-002.png" alt="">
                </p>
                <p>
                    <img src="../assets/img/ad/cp-003.png" alt="">
                </p>
                <p>http://www.a-ui.cn/AUI素材网 （北京时代索引网络技术有限公司） 是一家提供网页模板下载、手机模板网站下载、微信小程序页面下载、app内嵌页面下载、以企业官网、个人网站、社区论坛、后台网站、个人博客、商城购物网站、专题模板等html源码下载，以及在线交流的平台，致力于打造好用，免费网页模板下载基地；AUI素材网（“北京时代索引网络技术有限公司”），以网页模板源码下载为主。AUI素材网的使命是用web前端技术，让web前端开发更简单，便捷，轻便，快速开发，AUI素材网和大家一起交流web前端技术，打造用户体验一流的网站源码，提供用户下载。</p>
                <p>我们的使命是用web前端技术，让前端开发更简单，便捷，轻便，快速开发，AUI素材网和大家一起交流前端技术，打造用户体验一流的网站源码，提供用户下载。 本站所有模板均来自网络或本人自制上传，仅用于分享交流，请勿用作商业用途。 如有侵犯您的版权，请联系 aui_cn@163.com ，我们会在第一时间进行回复及处理，如有给您带来不便，敬请谅解。</p>
            </div>
        </section>
        <div class="m-actionsheet" id="actionSheet">
            <div class="aui-show-box">
                <div class="aui-show-box-title aui-footer-flex">
                    <div class="b-line aui-coll-share-box">
                        <a href="javascript:;" class="aui-coll-share-item">
                            <div class="aui-coll-share-img">
                                <img src="../assets/img/icon/icon-wx.png" alt="">
                            </div>
                            <div class="aui-coll-share-text">微信好友</div>
                        </a>
                        <a href="javascript:;" class="aui-coll-share-item">
                            <div class="aui-coll-share-img">
                                <img src="../assets/img/icon/icon-pyq.png" alt="">
                            </div>
                            <div class="aui-coll-share-text">朋友圈</div>
                        </a>
                        <a href="javascript:;" class="aui-coll-share-item">
                            <div class="aui-coll-share-img">
                                <img src="../assets/img/icon/icon-qq.png" alt="">
                            </div>
                            <div class="aui-coll-share-text">QQ</div>
                        </a>
                        <a href="javascript:;" class="aui-coll-share-item">
                            <div class="aui-coll-share-img">
                                <img src="../assets/img/icon/icon-kj.png" alt="">
                            </div>
                            <div class="aui-coll-share-text">QQ空间</div>
                        </a>
                        <a href="javascript:;" class="aui-coll-share-item">
                            <div class="aui-coll-share-img">
                                <img src="../assets/img/icon/icon-txw.png" alt="">
                            </div>
                            <div class="aui-coll-share-text">腾讯微博</div>
                        </a>
                        <a href="javascript:;" class="aui-coll-share-item">
                            <div class="aui-coll-share-img">
                                <img src="../assets/img/icon/icon-wb.png" alt="">
                            </div>
                            <div class="aui-coll-share-text">新浪微博</div>
                        </a>
                    </div>
                    <div class="aui-coll-cancel">
                        <a href="javascript:;" id="cancel" class="">取消
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // import List from './List';
    import $ from 'jquery';
    import '../assets/js/jquery.min'
    // import  '../assets/js/touchSlider.js'
    // $(document).ready(function() {
        // console.log($(".main_img").touchSlider)
        // console.log($(".main_img").touchSlider)
        // $(".main_img").touchSlider({
        //     flexible: true,
        //     speed: 200,
        //     btn_prev: $("#btn_prev"),
        //     btn_next: $("#btn_next"),
        //     paging: $(".point a"),
        //     counter: function(e) {
        //         $(".point a").removeClass("on").eq(e.current - 1).addClass("on");
        //         $(".img_font span").hide().eq(e.current - 1).show();
        //     }
        // });

    // });
    var intDiff = parseInt(32000);
    //倒计时总秒数量
    function timer(intDiff) {
        window.setInterval(function() {
            var day = "00"
                , hour = "00"
                , minute = "00"
                , second = "00";
            //时间默认值
            if (intDiff > 0) {
                day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9)
                minute = '0' + minute;
            if (second <= 9)
                second = '0' + second;
            $('.hour_show').html('0<s id="h"></s>' + hour + ' ');
            $('.minute_show').html('<s></s>' + minute + ' ');
            $('.second_show').html('<s></s>' + second + ' ');
            intDiff--;
        }, 1000);
    }

    $(function() {
        timer(intDiff);
    });

    export default {
        name: "detail",
        components:{
           // List
        }
    }


</script>

<style scoped>

</style>