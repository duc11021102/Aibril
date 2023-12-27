<template>
  <div class="p-3">
    <div class="font-body text-3xl font-base text-sky-500">User Management</div>
    <button
      class="bg-sky-500 hover:bg-sky-400 px-3 py-2 mt-4 rounded-lg text-white font-base ease-out duration-200 shadow-md"
    >
      사용자 관리
    </button>
    <div class="flex flex-row text-center items-center mt-14 gap-5">
      <p class="text-2xl font-body font-base text-sky-500">User List</p>
      <FileAddOutlined
        class="text-3xl text-sky-500 hover:text-sky-400 duration-200"
      />
      <p
        class="rounded-lg border px-3 py-2 flex flex-row justify-center items-center"
      >
        <input
          class="focus:outline-none border-none"
          type="text"
          placeholder="사용자 관리..."
        />
        <SearchOutlined class="text-sky-500" />
      </p>
    </div>

    <TableCom />
  </div>
</template>

<script setup>
import { FileAddOutlined, SearchOutlined } from "@ant-design/icons-vue"
import TableCom from "../components/UserManagement/TableCom.vue"
</script>

<script>
export default {
  name: "UserManagementView",
}
</script>
<style></style>
