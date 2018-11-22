<template>
    <div class="photoList">
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="{'mui-control-item':true, 'mui-active':item.id==0}" data-wid="tab-top-subpage-1.html" 
                        v-for="item in categories" :key="item.id" @click="getphotoList(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
		</div>

        <!-- 图片区 -->
        <ul class="photo">
            <router-link v-for="item in photoList" :key='item.id' tag="li" :to="'/home/photoInfo/'+item.id">
                <img v-lazy="item.img_url">
                <div class="description">
                    <span class="title">{{item.title}}</span>
                    <div class="main">{{item.zhaiyao}}</div>
                </div>
            </router-link>        
        </ul>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      categories: [],
      photoList:[]
    };
  },
  created() {
    this.getCategory();
    this.getphotoList(0)
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          this.categories = result.body.message;
          this.categories.unshift({ id: 0, title: "全部" });
        }
      });
    },
    getphotoList(id){
        this.$http.get('api/getimages/'+id).then(result=>{
            if(result.body.status===0){
                this.photoList=result.body.message
            }
        })
    }
  }
};
</script>

<style lang="less">
    * {
        touch-action: pan-y;
    }
    .photo{
        padding: 10px;
        margin: 0;
        li{
            background-color: #ccc;
            text-align: center;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
            }
            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
                background-color: red;
            }
            img[lazy="error"] {
                width: 100%;
                height: 300px;
                margin: auto;
                background-color:#ccc;
            }
            .description{
                color: white;
                text-align: left;
                background-color: rgba(0,0,0,0.3);
                max-height: 85px;
                position: absolute;
                bottom:0;
                text-indent: 1em;
                span{
                    font-size: 15px;
                    margin: 5px 0;
                }
                .main{
                    font-size: 13px;
                }
            }
        }
    }
    
</style>
