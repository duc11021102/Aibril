<template>
  <div class="w-80 flex flex-col shadow-xl shadow-right">
    <div class="flex flex-col text-sky-500 text-xl font-semibold">
      <router-link v-slot="{ isActive }" to="/user-management">
        <p
          class="flex flex-row gap-2 items-center w-full py-5 hover:bg-sky-100 pl-3 ease-out duration-200"
          :class="{ 'bg-sky-100': isActive }"
        >
          <span class="pb-2 font-bold"><UserOutlined /></span>User Management
        </p>
      </router-link>

      <router-link v-slot="{ isActive }" to="/role-management">
        <p
          class="flex flex-row gap-2 items-center w-full py-5 hover:bg-sky-100 pl-3 ease-out duration-200"
          :class="{ 'bg-sky-100': isActive }"
        >
          <span class="pb-2 font-bold"><KeyOutlined /></span>Role Management
        </p>
      </router-link>

      <router-link v-slot="{ isActive }" to="/settings">
        <p
          class="flex flex-row gap-2 items-center w-full py-5 hover:bg-sky-100 pl-3 ease-out duration-200"
          :class="{ 'bg-sky-100': isActive }"
        >
          <span class="pb-2 font-bold"><SettingOutlined /></span>Settings
        </p>
      </router-link>
    </div>

    <EnterOutlined
      class="text-3xl font-bold text-white w-12 h-12 pt-1 rounded-full bg-sky-500 hover:bg-sky-400 shadow-md ease-out duration-200 fixed bottom-3 left-3"
    />
  </div>
</template>
<script setup>
import {
  EnterOutlined,
  UserOutlined,
  KeyOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue"
</script>

<script>
export default {
  name: "MenuBar",
}
</script>
<style></style>
