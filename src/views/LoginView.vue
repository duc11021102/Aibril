<template>
  <div
    class="w-full flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 h-screen"
  >
    <FormSignin />
  </div>
</template>

<script setup>
// import FormLogin from "../components/Login/FormLogin.vue"
import FormSignin from "@/components/Login/FormSignin.vue"
</script>

<script>
export default {
  name: "LoginView",
  components: {},
}
</script>

<style scoped></style>
