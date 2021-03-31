<template>
  <div class="text-input">
    <input
      v-model.trim="inputVal"
      :class="['input-content', className, isPwd ? 'input-plugins' : '']"
      type="text"
      :maxlength="maxlength"
      :placeholder="placeholder"
      auto-complete="off"
      @keyup.enter="unlock"
    />
    <span v-show="inputVal" class="show-pwd" @click="showPwd">
      <svg-icon :icon-class="isPwd ? 'eye' : 'eye-open'" />
    </span>
    <el-button
      class="my-btn"
      icon="el-icon-unlock"
      :loading="unlockLoading"
      @click="unlock"
    ></el-button>
  </div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    maxlength: {
      // 最大长度
      type: Number,
      default: 255
    },
    type: {
      // input类型：text为文本，tel为数字
      type: String,
      default: "text"
    },
    unlockLoading: {
      // btn提交加载框
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputVal: "",
      passwordType: "password"
    };
  },
  computed: {
    isPwd() {
      return this.passwordType === "password";
    }
  },
  methods: {
    handelKeyup(e) {
      if (e.keyCode === 13) {
        this.$emit("inputContent", this.star ? this.text : this.value);
      }
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
    unlock() {
      this.$emit("inputContent", this.inputVal);
    }
  }
};
</script>
<style lang="scss" scoped>
.text-input {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  background: white;
  .input-content {
    text-indent: 5px;
  }
  .input-plugins {
    font-family: text-security-disc;
    /* Use -webkit-text-security if the browser supports it */
    -webkit-text-security: disc;
  }
}

.textinput-right {
  flex-direction: row-reverse;
}
.my-btn {
  position: absolute;
  right: 0px;
  height: 100%;
  border: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 1px solid #dcdfe6;
}
.show-pwd {
  position: absolute;
  right: 66px;
  color: #808080;
}
input {
  border: 0;
  outline: none;
}
</style>
