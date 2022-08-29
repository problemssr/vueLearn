<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我</button>
    <Student />
    <school name1="硅谷" address="北京" :age="18" />
    <school name1="黑马" address="上海" />
    <school name1="至诚" address="福州" />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "hello！！！",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.title);
    },
  },
};
</script>

<style>
</style>