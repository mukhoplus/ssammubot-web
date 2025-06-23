<script setup lang="ts">
import { ref } from "vue";
import { executeCommand } from "@/utils/commandHandler";

const input = ref("");
const outputs = ref<string[]>([
  "쌈무봇에 오신 것을 환영합니다. 도움말 또는 ? 입력시 명령어 목록 확인",
]);
const commandHistory = ref<string[]>([]);
let historyIndex = -1;

const submitCommand = async () => {
  if (!input.value.trim()) return;

  // 명령어 실행
  outputs.value.push(`> ${input.value}`);
  const result = await executeCommand(input.value);
  outputs.value.push(result);

  // 히스토리 저장
  commandHistory.value.push(input.value);
  historyIndex = commandHistory.value.length;

  // 입력 초기화
  input.value = "";

  // 스크롤 하단으로 이동
  setTimeout(() => {
    const terminal = document.querySelector(".terminal");
    if (terminal) terminal.scrollTop = terminal.scrollHeight;
  }, 100);
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (commandHistory.value.length > 0) {
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = commandHistory.value[historyIndex] || "";
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex < commandHistory.value.length - 1) {
      historyIndex++;
      input.value = commandHistory.value[historyIndex] || "";
    } else {
      historyIndex = commandHistory.value.length;
      input.value = "";
    }
  }
};
</script>

<template>
  <div class="terminal">
    <div
      v-for="(output, index) in outputs"
      :key="index"
      class="output"
      :class="{ 'scouter-output': output.includes('scouter-link') }"
    >
      <span v-html="output"></span>
    </div>
    <div class="input-line">
      <span class="prompt">user@maple ~ %</span>
      <input
        v-model="input"
        @keyup.enter="submitCommand"
        @keydown="handleKeyDown"
        class="command-input"
        autofocus
        placeholder="명령어를 입력하세요..."
      />
    </div>
  </div>
</template>

<style scoped>
.terminal {
  background-color: #1e1e1e;
  color: #c0c0c0;
  font-family: "Consolas", monospace;
  padding: 20px;
  height: 80vh;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.prompt {
  color: #4ec9b0;
  margin-right: 8px;
  font-weight: bold;
}

.command-input {
  background: transparent;
  border: none;
  color: #dcdcdc;
  font-family: inherit;
  width: calc(80% - 40px);
  outline: none;
  font-size: 1rem;
  caret-color: #4ec9b0;
}

.output {
  margin-bottom: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.input-line {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid #333;
  margin-top: 10px;
}
</style>
