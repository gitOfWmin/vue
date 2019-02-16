//配置覆盖node_modules中的配置
module.exports = {
    devServer:{
        port:8001
    },
    lintOnSave:true,//关闭esling警告
    productionSourceMap:false,//打包不带map文件
}