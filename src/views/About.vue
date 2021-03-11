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
      apiUrl: "http://localhost:5000",
    };
  },
  created() {
    this.GetUserInfo();
  },
  methods: {
    GetUserInfo() {
      var data = { Username: "032-03-25" };
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
