<template>
  <div class="input">
    <input
      class="inputPw"
      v-model="password"
      type="password"
      placeholder="Password"
      @input="emitPassword"
    />
    <EyeOutlined
      v-if="!isShow"
      v-on:click="handlerShowPw"
      :style="{ fontSize: '20px' }"
    />
    <EyeInvisibleOutlined
      v-if="isShow"
      v-on:click="handlerShowPw"
      :style="{ fontSize: '20px' }"
    />
  </div>
</template>

<script setup>
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons-vue"
</script>

<script>
export default {
  name: "InputPassword",
  data() {
    return {
      isShow: false,
      password: "",
    }
  },
  methods: {
    handlerShowPw() {
      this.isShow = !this.isShow
    },
    emitPassword() {
      this.$emit("inputPw", this.password)
    },
  },
}
</script>
<style scoped>
.input {
  background-color: #000745;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.inputPw {
  background-color: #000745;
  padding: 10px;
  width: 100%;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}

.inputPw:focus {
  outline: none;
}
</style>
