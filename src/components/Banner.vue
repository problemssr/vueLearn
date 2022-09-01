<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试一下go</button>
      请输入：<input type="text" :value="inp" @input="inpfoc" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      inp: "",
    };
  },
  methods: {
    inpfoc(e) {
      console.log(e);
    },
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test() {
      this.$router.go(-2);
    },
  },
};
</script>