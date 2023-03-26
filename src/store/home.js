// 引入请求
import { reqGetCategoryList, reqGetBannerList, reqFloorList } from "@/api";

// home模块的小仓库
const state = {
  // state 中默认的数据不能瞎写
  // home仓库存储三级菜单的数据
  categoryList: [],
  // 首页轮播图的数据
  bannerList: [],
  // floor轮播图的数据
  floorList: [],
};

// mutations 修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // console.log("mutations 接收的参数:"+categoryList);
    state.categoryList = categoryList;
  },
  // 首页轮播数据
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  // floor轮播数据
  FLOORLIST(state, floorList) {
    // console.log("mutations 接收的参数:"+JSON.stringify(floorList));
    state.floorList = floorList;
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
      commit("CATEGORYLIST", result.data);
    }
  },

  // 获取首页轮播图片数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      // console.log(result);
      commit("GETBANNERLIST", result.data);
    }
  },

  // 获取Floor轮播图片数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      // console.log(result);
      commit("FLOORLIST", result.data);
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
