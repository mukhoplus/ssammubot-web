<script setup lang="ts">
import ChatPage from "@/views/ChatPage.vue";
</script>

<template>
  <ChatPage />
</template>

<style>
body {
  background-color: #0a0a0a;
  margin: 0;
  padding: 0;
  font-family: "Consolas", "Courier New", monospace;
  color: #e0e0e0;
  line-height: 1.6;
}

#app {
  padding: 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
