import Vue from 'vue';
import Vuex from 'vuex';//{Store类,mapActions,mapGetters方法}
Vue.use(Vuex);//保证 任何组件内部使用this.$store


import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

let store = new Vuex.Store({
  actions,mutations,getters,state
})

export default store;