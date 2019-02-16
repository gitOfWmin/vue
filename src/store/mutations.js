import * as types from './types'

let mutations={
  [types.VIEW_NAV]:(state,payload)=>state.topS=payload,
  [types.VIEW_FOOT]:(state,payload)=>state.bottomS=payload,
  [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  [types.UPDATE_HOME]:(state,payload)=>state.home=payload,
  [types.CHECK_USER]:(state,payload)=>state.user=payload
};
export default mutations;