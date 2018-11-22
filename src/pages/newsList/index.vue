<template>
    <div class="newsList">
        <ul class="mui-table-view">
				<li v-for="items in newsList" :key="items.id" class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsInfo/'+ items.id">
						<img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/44313211?s=40&v=4">
						<div class="mui-media-body">
							<h3 class='mui-ellipsis'>{{items.title}}</h3>
							<p class='mui-ellipsis'>
                                <span class="ctime mui-pull-left">{{items.add_time | dateFormat}}</span>
                                <span class="click mui-pull-right">点击:{{items.click}}次</span>
                            </p>
						</div>
					</router-link>
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
                this.$http.get('api/getnewslist').then(result=>{
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
                width:100%;
                .mui-media-body{
                    width: 100%;
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
