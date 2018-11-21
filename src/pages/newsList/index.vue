<template>
    <div class="newsList">
        <ul class="mui-table-view">
				<li v-for="items in newsList" :key="items.id" class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="items.img_url">
						<div class="mui-media-body">
							<h3>{{items.title}}</h3>
							<p class='mui-ellipsis'>
                                <span class="ctime">{{items.add_time}}</span>
                                <span class="click">点击:{{items.click}}次</span>
                            </p>
						</div>
					</a>
				</li>
		</ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newsList:[]
            }
        },
        created() {
            this.getnewsList()
        },
        methods:{
            getnewsList(){
                this.$http.get('http://www.lovegf.cn:8899/api/getnewslist').then(result=>{
                    if(result.body.status===0){
                        this.newsList=result.body.message
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    .newsList{
        .mui-table-view{
            .mui-table-view-cell>a{
                display: flex;
                align-items: center;
                .mui-media-body{
                    h3{
                        font-size: 14px;
                    }
                    p{
                        font-size: 13px;
                        color:teal
                    }
                 }
            }
        }
    }
</style>
