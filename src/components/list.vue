<template>
    <div class="aui-fruit-list">
        <ul>
            <li v-for="(item,index) in list" :key="item.id">
            <router-link :to="'/detail/'+item.id +'?dataName='+ dataName" class="aui-flex b-line" :key="item.id">
                <div class="aui-fruit-img">
                    <img :src="item.src" alt="">
                </div>
                <div class="aui-flex-box">
                    <h2>{{ item.des }}</h2>
                    <h3>{{ item.price }}<em>{{ item.count }}</em></h3>
                    <p>{{ item.good_price }}</p>
                </div>
                <div class="aui-fruit-button">
                    <button>去拼团</button>
                </div>
            </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['list','dataName'],
        data(){
            return {
                home:[ ]
            }
        },
        mounted(){
        }
    }
</script>

<style scoped>

</style>