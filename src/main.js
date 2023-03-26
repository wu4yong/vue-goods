import Vue from "vue";
import App from "./App.vue";

// 关闭生产提示
Vue.config.productionTip = false;

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import TypeNav from "@/components/TypeNav";
import Carsousel from "@/components/Carousel";
//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);

//引入路由相关文件
import router from "@/router";
//引入仓库进行注册
import store from "@/store";
//引入swiper轮播样式
import "swiper/css/swiper.css";

// 测试接口
// import { reqgetCategoryList } from "@/api";
// reqgetCategoryList();

//引入MockServer.js----mock数据
import "@/mock/mockServe";

new Vue({
  render: (h) => h(App),
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router,
  //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
  store,
  TypeNav,
  Carsousel
}).$mount("#app");
