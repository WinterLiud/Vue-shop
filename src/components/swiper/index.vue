<template>
    <div>
        <mt-swipe :auto="4000" class="banner">
            <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        props:['bannerList']
    }
</script>

<style lang="less">
        .banner{
            height: 200px;
            .mint-swipe-item{
                &:nth-child(1){
                    background-color:yellow;
                }
                &:nth-child(2){
                    background-color:red;
                }
                &:nth-child(3){
                    background-color:blue;
                }
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    img{
                        width: 100%;
                    }
                }
            }
        };
</style>

