<template>
  <ul>
    <!-- query方式 -->
    <!-- <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.message }}</li> -->
    <!-- params方式 -->
    <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.message }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style>
</style>