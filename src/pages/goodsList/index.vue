<template>
    <div class="goodList">          
        <div class="goodItem" v-for="item in goodsList" :key="item.id" @click="getDetail(item.id)">
            <img src="https://p.ssl.qhimg.com/dmt/200_200_/t015243ebe9886f6e5b.jpg" alt="">
            <h1>{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pageindex:1,
                goodsList:[]
            }
        },
        created() {
            this.getgoodsList()
        },
        methods:{
            getgoodsList(){
                this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                    console.log(result)
                    if(result.body.status===0){
                        this.goodsList=this.goodsList.concat(result.body.message)                   
                    }
                })
            },
            getMore(){
                this.pageindex++;
                this.getgoodsList()
            },
            getDetail(id){
                // 1. 最简单的
                // this.$router.push("/home/goodsinfo/" + id);
                // 2. 传递对象
                // this.$router.push({ path: "/home/goodsInfo/" + id });
                this.$router.push({name:'goodsInfo',params:{id}})
            }
        }
    }
</script>

<style lang="less">
    .goodList{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goodItem{
            width: 49%;
            border: 1px solid #ccc;
            margin: 4px 0;
            padding: 3px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
            }
            h1{
                font-size: 14px;
                font-weight: bold;
            }
            .info{
                background-color: #eee;
                margin-top: 5px;
                .price{
                    .now{
                        font-size: 16px;
                        color: red;
                        font-weight: bold;
                    }
                    .old{
                        font-size: 12px;
                        margin-left: 10px;
                        text-decoration: line-through;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>
