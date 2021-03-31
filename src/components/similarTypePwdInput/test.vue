<template>
  <div>
    <h5>文本正常显示</h5>
    <div class="input-box">
      <myInput placeholder="请输入内容" />
    </div>
    <h5>显示文本带星加密类型</h5>
    <div class="input-box">
      <myInput placeholder="请输入内容" :star="true" @input="typeContent" />
    </div>
    <h5>文本带星加密并且靠右输入类型</h5>
    <div class="input-box">
      <myInput placeholder="请输入内容" :right="true" :star="true" />
    </div>
    <h5>使用原生text-security css来实现input[type=password]</h5>
    <div class="input-box">
      <cust-text-security-origin
        type="text"
        placeholder="请输入密码"
        @inputContent="inputContent"
      />
    </div>
    <h5>使用text-security 插件来实现input[type=password]</h5>
    <div class="input-box">
      <cust-text-security-plugin
        type="text"
        placeholder="请输入密码"
        @inputContent="inputContent"
      />
    </div>
  </div>
</template>
<script>
import myInput from "./custViewVal";
import CustTextSecurityOrigin from "./text-security-origin";
import CustTextSecurityPlugin from "./text-security-plugin";

export default {
  name: "myinput",
  components: {
    myInput,
    CustTextSecurityOrigin,
    CustTextSecurityPlugin
  },
  data() {
    return {};
  },
  methods: {
    typeContent(val) {
      console.log(val);
    },
    inputContent(val) {
      console.log(val);
    }
  }
};
</script>
<style media="screen" lang="scss">
* {
  margin: 0;
  padding: 0;
}
input {
  border: 0;
  outline: none;
}
.input-box {
  width: 90%;
  margin: 10px auto;
  height: 35px;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
}
h5 {
  width: 90%;
  margin: 0 auto;
}
</style>
