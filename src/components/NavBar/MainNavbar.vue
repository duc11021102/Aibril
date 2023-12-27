<template>
  <nav
    class="w-full font-body p-3 m-0 bg-sky-500 flex justify-between text-center"
  >
    <p class="text-white text-3xl flex items-center">AI Studio for TA</p>
    <div class="flex text-white items-center gap-5">
      <div class="font-body font-bold flex flex-col items-end">
        <p>{{ userEmail }}</p>
        <p>{{ userName }}</p>
      </div>
      <DropDown />
      <div></div>
    </div>
  </nav>
</template>
<script setup>
import DropDown from "./DropDown.vue"
</script>
<script>
export default {
  data() {
    return {
      userEmail: "anhlh@dasvision.vn",
      userName: "Anh La Hong",
    }
  },
}
</script>
<style></style>
