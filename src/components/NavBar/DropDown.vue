<template>
  <div class="ease-out duration-150" @click="isOpen = !isOpen">
    <CaretDownOutlined
      class="text-xl k w-8 h-8 m-0 rounded-full hover:bg-sky-400 focus:bg-sky-400 ease-out duration-200"
    />
    <div
      v-if="isOpen"
      class="absolute font-body font-bold flex flex-col items-start right-6 text-sky-500 bg-white border-2 shadow-md top-20 text-base rounded-md p-3"
    >
      <div
        v-for="item in services"
        :key="item"
        class="p-2 flex items-start rounded-md w-full hover:bg-sky-100 ease-out duration-200"
      >
        <router-link class="" to="/">{{ item.title }}</router-link>
      </div>
      <div
        class="p-2 flex items-start w-full border-t-2 hover:bg-sky-100 text-black ease-out duration-200"
      >
        <router-link class="" to="/">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CaretDownOutlined } from "@ant-design/icons-vue"
</script>

<script>
export default {
  components: {},
  data() {
    return {
      isOpen: false,
      services: [
        { title: "Edit info", link: "/" },
        { title: "Login history", link: "/" },
        { title: "Change password", link: "/" },
      ],
    }
  },
}
</script>
<style></style>
