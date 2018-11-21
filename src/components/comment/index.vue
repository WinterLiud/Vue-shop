<template>
    <div class="comment">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入您的评论(字数不得超过200字)"></textarea>
        <mt-button type="primary" size='large'>发表评论</mt-button>

        <div class="coment-main">
            <div class="comment-item" v-for="(item, index) in commentList" :key="index">
                <div class="comment-title">
                    第{{index+1}}楼  用户:  {{item.user_name}}  发表时间:{{item.add_time | dateFormat}}
                </div>
                <div class="comment-content">
                    {{item.content}}
                </div>
            </div>          
        </div>

        <mt-button type="danger" size='large' plain>加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        props:['id'],
        data(){
            return {
                pageindex:1,
                commentList:[]
            }
        },
        created() {
            this.getComment()
        },
        methods:{
            getComment(){
                this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(result=>{
                    if(result.body.status===0){
                        // console.log(result)
                        this.commentList=result.body.message
                    }
                    
                })
            }
        }
    }
</script>

<style lang="less">
    .comment{
        margin: 5px 0;
        h1{
            font-size: 18px;
            font-weight: bold
        }
        textarea{
            font-size: 14px;
            height: 85px;
        }
        .coment-main{
            margin: 5px 0;
            .comment-title{
                font-size: 13px;
                line-height: 30px;
                background-color: #e7e5e5;
            }
            .comment-content{
                font-size: 14px;
                line-height: 30px;
                text-indent: 2em;
            }
        }
    }
</style>

