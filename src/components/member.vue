<template>

        <section class="aui-scrollView">
            <div class="aui-member-head">
                <div class="aui-member-user">
                    <img src="../assets/img/user/user-logo-003.png" alt="">
                </div>
                <div class="aui-member-text">
                    <h2>AUI</h2>
                    <p>18519232894</p>
                     <!--<h2>昵称：{{ msg1 }}</h2>-->
                    <!--<p>电话：{{ msg2 }}</p>-->
                </div>
            </div>
            <div class="aui-flex b-line">
                <div class="aui-flex-box">
                    <h4>我的订单</h4>
                </div>
                <div class="aui-flex-arrow">
                    <router-link to="/order">全部订单</router-link>
                </div>
            </div>
            <div class="aui-layout">
                <router-link to="/order" class="aui-layout-item">
                    <div class="aui-layout-icon">
                        <img src="../assets/img/icon/icon-item-001.png" alt="">
                    </div>
                    <div class="aui-layout-text">待付款</div>
                </router-link>
                <router-link to="/order" class="aui-layout-item">
                    <div class="aui-layout-icon">
                        <img src="../assets/img/icon/icon-item-002.png" alt="">
                    </div>
                    <div class="aui-layout-text">待发货</div>
                </router-link>
                <router-link to="/order" class="aui-layout-item">
                    <div class="aui-layout-icon">
                        <img src="../assets/img/icon/icon-item-003.png" alt="">
                    </div>
                    <div class="aui-layout-text">待收货</div>
                </router-link>
                <router-link to="/order" class="aui-layout-item">
                    <div class="aui-layout-icon">
                        <img src="../assets/img/icon/icon-item-004.png" alt="">
                    </div>
                    <div class="aui-layout-text">退款/售后</div>
                </router-link>

            </div>
            <div class="divHeight"></div>
            <div class="aui-course-list">
                <router-link to="/address" class="aui-flex b-line">
                    <div class="aui-course-icon">
                        <img src="../assets/img/icon/icon-ad-001.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h5>收货地址</h5>
                    </div>
                </router-link>
                <a href="user-set.html" class="aui-flex b-line">
                    <div class="aui-course-icon">
                        <img src="../assets/img/icon/icon-ad-002.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h5>用户设置</h5>
                    </div>
                </a>
                <a href="about.html" class="aui-flex">
                    <div class="aui-course-icon">
                        <img src="../assets/img/icon/icon-ad-003.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h5>关于我们</h5>
                    </div>
                </a>
                <div class="divHeight"></div>
                <a href="tel:18519232894" class="aui-flex b-line">
                    <div class="aui-course-icon">
                        <img src="../assets/img/icon/icon-ad-004.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h5>联系客服</h5>
                    </div>
                    <div class="aui-flex-tel">18519232894</div>
                    <div class="aui-flex-arrow"></div>
                </a>
                <a href="https://xihazahuopu.taobao.com/" target="_blank" class="aui-flex b-line">
                    <div class="aui-course-icon">
                        <img src="../assets/img/icon/icon-ad-005.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h5>商城</h5>
                    </div>
                    <div class="aui-flex-tel">活动促销中</div>
                    <div class="aui-flex-arrow"></div>
                </a>
                <a href="http://www.a-ui.cn/" target="_blank" class="aui-flex b-line">
                    <div class="aui-course-icon">
                        <img src="../assets/img/icon/icon-ad-006.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h5>技术支持</h5>
                    </div>
                    <div class="aui-flex-tel">时代索引</div>
                    <div class="aui-flex-arrow"></div>
                </a>
            </div>
        </section>
</template>

<script>
    // import $ from '../assets/js/jquery.min'
    // import '../assets/js/slider'
    // import '../assets/js/tab'
    export default {
        // components:{
        //    banner,List
        // }

    }
</script>

<style scoped>

</style>