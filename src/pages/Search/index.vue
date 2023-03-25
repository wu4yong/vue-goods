<!-- 页面区域 -->
<template>
  <div>我是搜索
    <br/>
    parms传递参数：{{ $route.params.keyword }}
  
  </div>
</template>

<!-- 组件区域 -->
<script>
export default {
  name: 'Search',
};
</script>

<!-- 样式区域 -->
<style  scoped>

</style>