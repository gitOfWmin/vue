import axios from 'axios';
import * as types from './types';

let actions={
  [types.VIEW_NAV]:({commit},payload)=>commit(types.VIEW_NAV,payload),
  [types.VIEW_FOOT]:({commit},payload)=>commit(types.VIEW_FOOT,payload),
  [types.VIEW_LOADING]:({commit},payload)=>commit(types.VIEW_LOADING,payload),
  [types.UPDATE_HOME]:({commit,state},payload)=>{
    // 异步操作axios
    axios({
      url:payload,
    }).then(
      res=>commit(types.UPDATE_HOME,res.data)
    )
  },
  [types.CHECK_USER]:({commit,state},payload)=>{
    axios({
      url:'/data/user.json',
      /* params:{
        username:payload.username,
        password:payload.password,
      } */
    }).then(
      res=>commit(types.CHECK_USER,res.data)
    )
  }
};
export default actions;