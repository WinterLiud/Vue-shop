<template>
    <div class="goodsDesc">
        <h1>{{goodsDesc.title}}</h1>
        <hr>
        <div class="content" v-html="goodsDesc.content"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:this.$route.params.id,
                goodsDesc:{}
            }
        },
        created() {
            this.getgoodsDesc()
        },
        methods:{
            getgoodsDesc(){
                this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
                    if(result.body.status===0){
                        this.goodsDesc=result.body.message[0]
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    .goodsDesc{
        h1{
            font-size: 16px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }
    }
</style>

