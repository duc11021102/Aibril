<template>
  <MainNavbar />
  <div class="w-full font-body flex">
    <MenuBar />
    <div class="w-full">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import MainNavbar from "@/components/NavBar/MainNavbar.vue"
import MenuBar from "@/components/Dashboard/MenuBar.vue"
</script>

<script>
export default {
  name: "DashboardView",
  components: {
    MainNavbar,
  },
  data() {
    return {
      userEmail: "anhlh@dasvision.vn",
      userName: "Anh La Hong",
      currentPath: "",
    }
  },
  mounted() {
    const currentPath = window.location.pathname
    console.log("Current Path:", currentPath)
  },
}
</script>
<style scoped></style>
