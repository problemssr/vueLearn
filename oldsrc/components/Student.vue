<template>
  <div class="school">
    <h2 @click="showName">名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年龄：{{ scAge }}</h2>
    <!-- <button @click="btn">点我</button> -->
  </div>
</template>

<script>
import { mixin, mixin2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "zs",
      sex: "男",
      scAge: "20",
    };
  },
  mixins: [mixin, mixin2],
};
</script>

<style>
.school {
  background-color: gray;
}
</style>