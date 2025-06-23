<script setup lang="ts">
import CommandTerminal from "@/components/CommandTerminal.vue";
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <div class="chat-container">
    <div class="header">
      <h1>쌈무봇</h1>
    </div>
    <CommandTerminal />
    <div class="footer">
      <p>
        Copyright © 2025 - {{ currentYear }}
        <a
          href="https://github.com/mukhoplus"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >Mukho I/O</a
        >. All rights reserved.
      </p>
      <p>
        Data Based on
        <a
          href="https://openapi.nexon.com/ko/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >NEXON OPEN API</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #121212;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
}

.header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
  user-select: none;
}

h1 {
  color: #4ec9b0;
  font-family: "Consolas", monospace;
  margin-bottom: 5px;
}

.header p {
  color: #888;
  font-size: 0.9rem;
}

.footer {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #333;
  text-align: center;
  color: #666;
  font-size: 0.8rem;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  font-weight: inherit;
  cursor: pointer;
}
</style>
