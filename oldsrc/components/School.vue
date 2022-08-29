<template>
  <div class="school">
    <h2 @click="showName">名称：{{ name1 }}</h2>
    <h2>地址：{{ address }}</h2>
    <h2>年龄：{{ scAge }}</h2>
    <button @click="btn">点我</button>
  </div>
</template>

<script>
//引入混合
import { mixin, mixin2 } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      scAge: this.age,
    };
  },
  props: ["name1", "address", "age"],
  methods: {
    btn() {
      this.scAge++;
    },
  },
  mixins: [mixin, mixin2],
};
</script>

<style>
.school {
  background-color: gray;
}
</style>