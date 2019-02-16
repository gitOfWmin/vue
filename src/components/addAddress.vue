<template>
    <section class="aui-flexView">
        <header class="aui-navBar aui-navBar-fixed">
            <a href="javascript:history.back(-1)" class="aui-navBar-item">
                <i class="icon icon-return"></i>
            </a>
            <div class="aui-center">
                <span class="aui-center-title">添加新地址</span>
            </div>
            <a href="javascript:;" class="aui-navBar-item">
                <i class="icon icon-sys"></i>
            </a>
        </header>
        <section class="aui-scrollView">
            <div class="aui-address-box">
                <div class="aui-address-cell-item">
                    <div class="aui-cell-name">收货人</div>
                    <div class="aui-cell-input">
                        <input type="text" class="cell-input" placeholder="请输入您的姓名" autocomplete="off">
                    </div>
                </div>
                <div class="aui-address-cell-item">
                    <div class="aui-cell-name">手机号</div>
                    <div class="aui-cell-input">
                        <input type="text" class="cell-input" placeholder="请输入您的手机号" autocomplete="off">
                    </div>
                </div>
                <div class="aui-address-cell-item">
                    <div class="aui-cell-name">所在地区</div>
                    <div class="aui-cell-input cell-input-text">
                        <input type="text" class="cell-input" readonly id="J_Address" placeholder="请选择收货地址">
                    </div>
                </div>
                <div class="aui-address-cell-item">
                    <div class="aui-cell-name">详细地址</div>
                    <div class="aui-cell-input">
                        <input type="text" class="cell-input" placeholder="街道 小区或门牌号" autocomplete="off">
                    </div>
                </div>
                <div class="aui-add-box">
                    <button>保存收货地址</button>
                </div>
            </div>
        </section>
    </section>



</template>

<script>
    import $ from 'jquery'
    // import '../assets/js/address'
    // import '../assets/js/city'

    // !function() {
    //     var $target = $('#J_Address');
    //
    //     $target.citySelect();
    //
    //     $target.on('click', function(event) {
    //         event.stopPropagation();
    //         $target.citySelect('open');
    //     });
    //
    //     $target.on('done.ydui.cityselect', function(ret) {
    //         $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
    //     });
    // }();


    export default {
        name: "addAddress"
    }
</script>

<style scoped>

</style>