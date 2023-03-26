<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home与Search可见的，但是Login|Register不可见 -->
    <!-- 利用路由元信息解决当前问题好处：一行代码就可以解决 -->
    <Footer v-show="$route.meta.isShow" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    // console.log("组件挂载完毕，可以向服务器发送请求!");
    // 派发一个action请求|| 获取商品分类的三级列表数据
    this.$store.dispatch("categoryList");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
