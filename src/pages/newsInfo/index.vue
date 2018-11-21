<template>
    <div class="newsInfo">
        <div class="title">{{newsInfo.title}}</div>
        <div class="subTitle">
            <span class="ctime">发表时间:{{newsInfo.add_time | dateFormat}}</span>
            <span class="click">点击:{{newsInfo.click}}次</span>
        </div>
        <hr>

        <div class="content" v-html="newsInfo.content"></div>

        <comment :id='id'></comment> 
    </div>
</template>

<script>
    import comment from '../../components/comment'

    export default {
        data(){
            return {
                id:this.$route.params.id,
                newsInfo:{}
            }
        },
        created() {
            this.getnewsInfo()
        },
        methods:{
            getnewsInfo(){
                this.$http.get('api/getnew/'+this.id).then(result=>{
                    if(result.body.status===0){
                        // console.log(result)
                        this.newsInfo=result.body.message[0]
                    }
                })
            }
        },
        components:{
            comment
        }
    }
</script>

<style lang="less">
    .newsInfo{
        padding: 0 5px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subTitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
