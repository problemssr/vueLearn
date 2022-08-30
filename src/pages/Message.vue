<template>
  <div>
    <ul>
      <li v-for="m in msgList" :key="m.id">
        <!-- <router-link
          :to="`/home/message/detail?id=${m.id}&message=${m.message}`"
          >{{ m.message }}</router-link
        > -->
        <!-- <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: m.id,
              message: m.message,
            },
          }"
          >{{ m.message }}</router-link
        > -->
        <!-- params写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.message}`">{{
          m.message
        }}</router-link> -->
        <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: m.id,
              message: m.message,
            },
          }"
          >{{ m.message }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msgList: [
        { id: "001", message: "message001" },
        { id: "002", message: "message002" },
        { id: "003", message: "message003" },
      ],
    };
  },
  mounted() {
    // console.log(this.$route);
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "xiangqing",
        params: {
          id: m.id,
          message: m.message,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiangqing",
        params: {
          id: m.id,
          message: m.message,
        },
      });
    },
  },
};
</script>