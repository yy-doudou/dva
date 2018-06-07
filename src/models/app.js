import {
  query
} from '../services/api';
export default {
  namespace: 'app',
  state: {
    menuList:[
      {
        name:"首页",
        path:''
      },{
        name:"技术栈",
        path:''
      },{
        name:"慢生活",
        path:''
      },{
        name:"轻松一刻",
        path:''
      },{
        name:"剑指远方",
        path:''
      }
    ]
  },
  subscriptions: {
    setup({dispatch,history}) {
      return history.listen(({pathname}) => {
        if (pathname === '/') {
          dispatch({type: 'load'});
        }
      });
    },
  },

  effects: {
    * fetch({payload}, {call,put}) {
      const result = yield call(query);
      yield put({type: 'save',userList: result.data});
    },
  },

  reducers: {
    save(state, {userList}) {
      const {data} = userList
      return { ...state, userList: data};
    },
  },

};
