<template>
  <div>
    <table
      class="text-sm text-left mt-3 border border-gray-300 rounded-lg table-auto overflow-hidden w-full"
    >
      <thead class="text-base text-white uppercase bg-sky-500">
        <tr>
          <th scope="col" class="py-3 px-6">Full Name</th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Email</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Status</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Role</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Initial Password</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Date</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Settings</div>
          </th>
        </tr>
      </thead>

      <tbody v-for="user in users" :key="user.id" class="bg-white">
        <tr class="bg-white border-b text-gray-500 font-bold">
          <th scope="row" class="py-4 px-6">{{ user.name }}</th>
          <td class="py-4 px-6 font-bold">{{ user.email }}</td>
          <td class="py-4 px-6" :class="checkStatus(user.status)">
            {{ user.status }}
          </td>
          <td class="py-4 px-6">{{ user.role }}</td>
          <td class="py-4 px-6">{{ user.initialPw }}</td>
          <td class="py-4 px-6">{{ user.Date }}</td>
          <td class="py-4 px-6 flex gap-4 text-lg">
            <ReloadOutlined />
            <EditOutlined />
            <DeleteOutlined />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import users from "../../data/user_data.js"
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons-vue"
</script>

<script>
export default {
  name: "TableCom",
  data() {
    return {
      users: users,
      status: {
        online: "text-green-500",
        offline: "text-yello-500",
      },
    }
  },
  methods: {
    checkStatus(status) {
      const style = status === "Online" ? "text-green-500" : "text-yellow-500"
      return style
    },
  },
}
</script>

<style></style>
