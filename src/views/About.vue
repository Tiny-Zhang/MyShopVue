<template>
  <div class="about">
    <div @click="GetUserInfo">点我</div>
    <div>{{ UserData.Username }}</div>
    <div>{{ UserData.TrueName }}</div>
    <div>{{ UserData.Mobile }}</div>
    <div>{{ UserData.Status }}</div>
    <div>{{ UserData.CreatTime }}</div>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">{{ UserData.Username }}</el-button>
      <el-button type="success">{{ UserData.TrueName }}</el-button>
    </el-row>
  </div>
</template>
<script>

import {http_getUserInfo} from '../httpapi/user_api'

export default {
  data() {
    return {
      UserData: [],
    };
  },
  created() {
    this.GetUserInfo();
  },
  methods: {
    GetUserInfo() {
      var data = { Username: "49270967@qq.com" };
        http_getUserInfo(data)
        .then(res => {
          this.UserData = res.data;
          console.log(this.UserData);
        })
        .catch(err => {
          let res = err.response;
          console.log("api error, HTTP CODE: " + res);
        });
    },
  },
};
</script>
