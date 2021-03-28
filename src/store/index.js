import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新
  state: {
    formDatas: null//定义一个变量 formDatas
  },
  //
  mutations: {
    // 改变state里面的值得方法
    //data 就是dialogVuex.vue页面提交的 this.form 
    getFormData(state, data) {
      // console.log("BBB:" + data);
      state.formDatas = data;
    }
  },
  //Action 提交的是 mutation，而不是直接变更状态。
  actions: {
  },
  modules: {
  }
})
