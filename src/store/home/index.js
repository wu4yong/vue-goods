// 引入请求
import { reqGetCategoryList } from "@/api";

// home模块的小仓库
const state = {
  // state 中默认的数据不能瞎写
  categoryList:[]
};

// mutations 修改state的唯一手段
const mutations = {
  CategoryList(state, categoryList) {
    // console.log("mutations 接收的参数:"+categoryList);
    state.categoryList = categoryList;
  },
};

 // actions 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async categoryList({ commit }) {
    // 通过API里面的接口函数调用,向服务器发送请求获取数据
    // console.log(reqGetCategoryList());
    let result = await reqGetCategoryList();
    if (result.code == 200) {
      // console.log("准备修改仓库数据");
      commit("CategoryList", result.data);
    }
  },
};

// getters 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

// 对外暴露仓库数据
export default {
  state,
  mutations,
  actions,
  getters,
};
