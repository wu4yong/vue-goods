<!-- 页面区域 -->
<template>
  <div>
    <!-- 全局的三级菜单 -->
    <Type-Nav></Type-Nav>

    <!-- 非全局组件 -->
    <!--  轮播图列表-->
    <ListContainer></ListContainer>
    <!--  今日推荐-->
    <Recommend></Recommend>
    <!--  商品排行-->
    <Rank></Rank>
    <!--  猜你喜欢-->
    <Like></Like>
    <!-- 楼层 -->
    <Floor></Floor>
    <Floor></Floor>
    <!--  商标-->
    <Brand></Brand>

    <!-- <button @click="add">点击我加1</button>
    <button>点击我减1</button>
    <span>仓库的数据为：{{ count }}</span> -->
  </div>
</template>

<!-- 组件区域 -->
<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
import Floor from "./Floor";

// 练习Vuex代码
// 获取vuex的数据
// import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor,
  },
  // computed: {
  //   ...mapState(["count"]),
  // },
  // methods: {
  //   add() {
  //     // 派发action
  //     this.$store.dispatch('add');
  //   },
  // },
};
</script>

<!-- 样式区域 -->
<style  scoped>
</style>