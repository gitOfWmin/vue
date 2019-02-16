<template>
    <section class="aui-flexView aui-flexView-address">
        <header class="aui-navBar aui-navBar-fixed b-line">
            <a href="javascript:history.back(-1)" class="aui-navBar-item">
                <i class="icon icon-return"></i>
            </a>
            <div class="aui-center">
                <span class="aui-center-title">地址管理</span>
            </div>
            <router-link to="/addAddress" class="aui-navBar-item">
                <i class="icon icon-sys"></i>添加
            </router-link>
        </header>
        <section class="aui-scrollView">
            <div class="aui-Address-box">
                <div class="aui-Address-box-item">
                    <div class="aui-Address-box-item-bd">
                        <h2>李嘉桦</h2>
                    </div>
                    <div class="aui-Address-box-item-ft">
                        <p>185****8899</p>
                    </div>
                </div>
                <div class="aui-Address-box-item aui-add-bottom b-line">
                    <div class="aui-Address-box-item-bd">
                        <p>北京市海淀区中关村街道学院路43号大唐电信B座801</p>
                    </div>
                </div>
                <div class="aui-Address-box-item">
                    <div class="aui-Address-box-item">
                        <label class="cell-right">
                            <input type="radio" value="1" name="1"  checked="" >
                            <i class="cell-radio-icon"></i>默认地址
                        </label>

                    </div>
                    <div class="aui-Address-box-item-ft">
                        <p> <i class="icon icon-delete"></i> 删除</p>
                    </div>
                </div>
            </div>
            <div class="aui-Address-box">
                <div class="aui-Address-box-item">
                    <div class="aui-Address-box-item-bd">
                        <h2>李嘉桦</h2>
                    </div>
                    <div class="aui-Address-box-item-ft">
                        <p>185****8899</p>
                    </div>
                </div>
                <div class="aui-Address-box-item b-line">
                    <div class="aui-Address-box-item-bd">
                        <p>北京市海淀区西三环北路22号中航大厦C座209北京市海淀区西三环北路22号中航大厦C座209</p>
                    </div>
                </div>
                <div class="aui-Address-box-item">
                    <div class="aui-Address-box-item">
                        <label class="cell-right">
                            <input type="radio" value="0" name="1">
                            <i class="cell-radio-icon"></i>默认地址
                        </label>
                    </div>
                    <div class="aui-Address-box-item-ft">
                        <p> <i class="icon icon-delete"></i>删除</p>
                    </div>
                </div>
            </div>
            <div class="aui-add-box">
                <button>添加新地址</button>
            </div>
        </section>
    </section>


    <!--&lt;!&ndash; 删除地址 弹窗 提示   通用弹窗 begin  &ndash;&gt;-->
    <!--<div class="mask-black-dialog" style="display:none">-->
        <!--<div class="m-confirm">-->
            <!--<div class="confirm-hd">-->
                <!--<strong class="confirm-title">标题</strong>-->
            <!--</div>-->
            <!--<div class="confirm-bd">确认删除该收货地址吗？</div>-->
            <!--<div class="confirm-ft">-->
                <!--<a href="javascript:;" class="confirm-btn default">取消</a>-->
                <!--<a href="javascript:;" class="confirm-btn primary">确定</a>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: "app-address"
    }
</script>

<style scoped>

</style>