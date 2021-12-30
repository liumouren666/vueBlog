import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/store/modules/login'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      login:true
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    modules:{
        login
    }
  })
  export default store