import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store=new Vuex.Store({
  state:{
    car:[]    //存储商品数据的数组
  },
  mutations:{
    addtoCar(state,goodsInfo){
        var flag=false
        state.car.some(item=>{
            if(item.id==goodsInfo.id){
                item.count+= goodsInfo.count
                flag=true
                return true
            }
        })
        if(!flag){
            state.car.push(goodsInfo)
        }
    }
  },
  getters:{ //getters， 只负责 对外提供数据，不负责 修改数据
      getallCount(state){
        var sum=0
        state.car.forEach(item=>{
            sum+=item.count
        })
        return sum
      }
  }

})

export default store