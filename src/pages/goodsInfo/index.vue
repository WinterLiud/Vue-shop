<template>
    <div class="goodsInfo">

        <transition
        @before-enter="beforeEnter" 
        @enter='enter' 
        @after-enter='afterEnter'>
            <div class="ball" v-show='flag'></div>
        </transition>      

        <!-- //商品轮播图区 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :bannerList="lunbo"></swiper>
				</div>
			</div>
		</div>

        <!-- 商品购买区 -->
        <div class="mui-card">
				<div class="mui-card-header">{{goodsInfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">市场价: ￥<del>{{goodsInfo.market_price}}</del> &nbsp;&nbsp;
                            销售价:<span class="nowPrice">￥{{goodsInfo.sell_price}}</span>
                        </p>
                        <p>购买数量:
                            <input type="button" value="-" class="reduce" @click='reduce'>
                            <input type="text" value="1" class="num">
                            <input type="button" value="+" class="add" @click='add'>
                        </p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
					</div>
				</div>
		</div>

        <!-- 商品参数区 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsInfo.goods_no}}</p>
                        <p>库存情况:{{goodsInfo.stock_quantity}}</p>
                        <p>上架时间:{{goodsInfo.add_time}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click='goodsDesc(id)'>图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click='goodsComment(id)'>商品评论</mt-button>
                </div>
		</div>
    </div>
</template>

<script>
    import swiper from '../../components/swiper'

    export default {
        data(){
            return {
                id:this.$route.params.id,
                lunbo:[{img:'https://p.ssl.qhimg.com/dmt/200_200_/t015243ebe9886f6e5b.jpg'},
                {img:'https://p.ssl.qhimg.com/dmt/200_200_/t015243ebe9886f6e5b.jpg'}],
                goodsInfo:{},
                flag:false
            }
        },
        created() {
            this.getlunbo(),
            this.getgoodsInfo()
        },
        methods:{
            getlunbo(){
                this.$http.get('api/getthumimages/'+this.id).then(result=>{
                    if(result.body.status===0){
                        result.body.message.forEach(item => {
                            item.img=item.src
                        });
                    }
                    // this.lunbo=result.body.message
                })
            },
            getgoodsInfo(){
                this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                    if(result.body.status===0){
                        this.goodsInfo=result.body.message[0]
                    }
                })
            },
            goodsDesc(id){
                this.$router.push({path:'/home/goodsDesc/'+id})
            },
            goodsComment(id){
                this.$router.push({path:'/home/goodsComment/'+id})
            },
            addShopcar(){
                this.flag=!this.flag
            },
            beforeEnter(el) {
                el.style.transform='translate(408px,138px)'
            },
            enter(el,done){
                el.offsetWidth;
                el.style.transform='translate(468px,168px)'
                el.style.transition='all 0.5s ease'
                done()
            },
            afterEnter(el){
                this.flag=!this.flag
            },
            
        },
        components:{
            swiper
        }
    }
</script>

<style lang='less'>
    .goodsInfo{
        background: #eee;
        overflow: hidden;
        p{
            margin-bottom: 10px;
            .nowPrice{
                font-size: 18px;
                color: red;
                font-weight: bold;
            }
            input{
                width: 38px;
                height: 35px;
                border-radius: 0;
                &.reduce{
                    margin-right:-4px;
                    border-right:none;
                    border-radius: 3px 0 0 3px
                }
                &.add{
                    margin-left: -4px;
                    border-left: none;
                    border-radius: 0 3px 3px 0
                }
            }
        }
        .mui-card-footer{
            display: block;
            button{
                margin: 15px 0
            }
        }

        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 100;
            top:408px;
            left: 138px;
        }
    }
</style>

