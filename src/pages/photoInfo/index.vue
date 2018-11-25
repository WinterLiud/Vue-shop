<template>
    <div class="photoInfo">
        <div class="title">{{photoInfo.title}}</div>
        <div class="subTitle">
            <span class="ctime">发表时间:{{photoInfo.add_time | dateFormat }} </span>
            <span class="click">点击:{{photoInfo.click}}次</span>
        </div>
        <hr>

        <!-- <img class="preview-img" v-for="(item,index) in minPhoto" :key="item.src" :src="item.src" height="100" @click="$preview.open(index, minPhoto)"> -->
        <vue-preview :slides="minPhoto" @close="handleClose"></vue-preview>
        <div class="content" v-html="photoInfo.content"></div>

        <comment :id='id'></comment>
    </div>
</template>

<script>
    import comment from '../../components/comment'

    export default {
        data(){
            return {
                id:this.$route.params.id,
                photoInfo:{},
                minPhoto:[
                    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542899902487&di=20cde62888096ce47622de26a3452098&imgtype=0&src=http%3A%2F%2Fpic19.photophoto.cn%2F20110415%2F0012024449042016_b.jpg',
                    msrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542899902487&di=20cde62888096ce47622de26a3452098&imgtype=0&src=http%3A%2F%2Fpic19.photophoto.cn%2F20110415%2F0012024449042016_b.jpg',
                        w:600,
                        h:400,
                        title: 'Image Caption 1',
                    },
                    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542900283454&di=b3dbfa9d11fa3eaa7950683db9f84514&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F314e251f95cad1c87c361a0f743e6709c93d510d.jpg',
                    msrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542900283454&di=b3dbfa9d11fa3eaa7950683db9f84514&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F314e251f95cad1c87c361a0f743e6709c93d510d.jpg',
                        w:600,
                        h:400,
                        title: 'Image Caption 2',
                    },
                    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542900283449&di=cc733087bb539c9532f1610704027c8b&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2Fcd954344d2b1552b90bbb754e1b691d90936903c.jpg',
                    msrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542900283449&di=cc733087bb539c9532f1610704027c8b&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2Fcd954344d2b1552b90bbb754e1b691d90936903c.jpg',
                        w:600,
                        h:400,
                        title: 'Image Caption 3',
                    }
                ]
            }
        },
        created() {
            this.getphotoInfo(),
            this.getminPhoto()
        },
        methods:{
            getphotoInfo(){
                this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                    if(result.body.status===0){
                        this.photoInfo=result.body.message[0]
                    }
                })
            },
            getminPhoto(){
                this.$http.get('api/getthumimages/'+this.id).then(result=>{
                    if(result.body.status===0){
                        result.body.message.forEach(item => {
                            item.w=600,
                            item.h=400
                        })
                        // this.minPhoto=result.body.message
                    }
                })
            },
            handleClose () {
        
            }
        },
        components:{
            comment
        }
    }
</script>

<style lang='less'>
    .photoInfo{
        padding: 0 5px;
        .title{
            font-size: 14px;
            text-align: center;
            margin: 15px 0;
            color: #26a2ff;
        }
        .subTitle{
            font-size: 13px;
            color: #8f8f94;
            display: flex;
            justify-content: space-between;
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }
        figure{
            width: 40%;
            display: inline-block;
            padding: 0;
            margin: 0 5px !important;
        }
        img{
            width: 50%;
            height:50% ;
            margin: 10px;
        }
    }
</style>

