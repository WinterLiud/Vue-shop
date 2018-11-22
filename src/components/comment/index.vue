<template>
    <div class="comment">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入您的评论(字数不得超过200字)" v-model="msg"></textarea>
        <mt-button type="primary" size='large' @click='postComment'>发表评论</mt-button>

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

        <mt-button type="danger" size='large' plain @click='getMore'>加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        props:['id'],
        data(){
            return {
                pageindex:1,
                commentList:[],
                msg:''
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
                        this.commentList=this.commentList.concat(result.body.message)
                    }
                    
                })
            },
            getMore(){
                this.pageindex++;
                this.getComment();
            },
            postComment(){
                if(this.msg.trim().length==0){
                    return Toast('评论不能空')
                }

                this.$http.post('api/postcomment/'+this.id,{content:this.msg.trim()}).then(result=>{
                    if(result.body.status===0){
                        
                        // var obj={
                        //     user_name:'匿名用户',
                        //     add_time:Date.now(),
                        //     content:this.msg
                        // }
                        // this.commentList.unshift(obj);
                        this.pageindex=1;
                        this.commentList=[];
                        this.getComment();
                        this.msg='';
                        Toast('评论成功')
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

