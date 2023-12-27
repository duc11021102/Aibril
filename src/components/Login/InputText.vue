<template>
  <div class="input">
    <input
      class="inputText"
      type="text"
      v-model="email"
      @input="emitEmail"
      placeholder="Email"
    />
  </div>
</template>

<script setup></script>

<script>
export default {
  name: "InputText",
  data() {
    return {
      email: "",
    }
  },
  methods: {
    emitEmail() {
      this.$emit("inputEmail", this.email)
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
.inputText {
  background-color: #000745;
  padding: 10px;
  width: 100%;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
.inputText:focus {
  outline: none;
}
</style>
