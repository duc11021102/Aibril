<template>
  <section class="w-2/3 h-2/3 bg-indigo-500 rounded-lg flex items-center pl-24">
    <form @submit.prevent="" class="w-1/4 text-white font-body flex flex-col">
      <h3 class="font-body m-0 text-4xl text-center font-bold">
        Aibril 조선글
      </h3>

      <input
        class="w-full p-2 text-xl bg-indigo-500 border-b-2 mt-5 border-white focus:outline-none"
        type="email"
        placeholder="Email"
        v-model="email"
        required
      />

      <p
        class="w-full p-2 text-xl bg-indigo-500 border-b-2 mt-5 border-white flex items-center"
      >
        <input
          class="w-full bg-indigo-500 focus:outline-none"
          :type="pwType"
          placeholder="Password"
          v-model="password"
          required
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
      </p>

      <button
        type="submit"
        class="w-full bg-sky-500 mt-5 rounded-md p-2 text-xl font-bold hover:bg-sky-400 ease-out"
        @click="signin"
      >
        Log In
      </button>
      <p class="text-white">{{ email }}</p>
      <p class="text-white">{{ password }}</p>
    </form>
  </section>
</template>
<script setup>
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons-vue"
</script>
<script>
export default {
  name: "FormSignin",
  data() {
    return {
      email: "",
      password: "",
      isShow: false,
      pwType: "password",
    }
  },
  methods: {
    handlerShowPw() {
      this.isShow = !this.isShow
      this.pwType = this.pwType === "password" ? "text" : "password"
    },
    signin() {
      console.log({ email: this.email, password: this.password })
    },
  },
}
</script>
<style scoped></style>
