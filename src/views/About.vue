<template>
  <div class="about">
    <div @click="GetUserInfo">点我</div>
    <div>{{UserData.Username}}</div>
    <div>{{UserData.TrueName}}</div>
    <div>{{UserData.Mobile}}</div>
    <div>{{UserData.Status}}</div>
    <div>{{UserData.CreatTime}}</div>
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";

export default {
  data() {
    return {
      UserData: [],
      apiUrl: "http://192.168.106.95:5000",
    };
  },
  created() {
    this.GetUserInfo();
  },
  methods: {
    GetUserInfo() {
      var data = { Username: "49270967@qq.com" };
      axios
        .post(`${this.apiUrl}/api/User/GetUserInfo`, data)
        .then((res) => {
          //console.log("res=>",res)
          this.UserData =res.data;
          console.log(this.UserData)
        })
        .catch(function (res) {
          console.log(res);
        });
    },
  },
};
</script>
