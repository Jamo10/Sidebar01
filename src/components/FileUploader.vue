<script setup>
import { ref } from 'vue'
import {
 ArrowUpOnSquareIcon
} from '@heroicons/vue/24/solid'

const files = ref([])
const isDragging = ref(false)
const fileInput = ref(null)

const handleFilesSelected = (event) => {
  const selected = Array.from(event.target.files)
  files.value.push(...selected)
}

const handleDrop = (event) => {
  const dropped = Array.from(event.dataTransfer.files)
  files.value.push(...dropped)
  isDragging.value = false
}

const handleDragOver = () => {
  isDragging.value = true
}

const handleDragLeave = () => {
  isDragging.value = false
}

const triggerFileInput = () => {
  fileInput.value.click()
}
</script>

<template>
  <div class="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center transition-colors duration-200"
    :class="{ 'bg-blue-50 border-blue-400': isDragging }" @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave" @drop.prevent="handleDrop">
    <input type="file" multiple class="hidden" ref="fileInput" @change="handleFilesSelected" />
    <div class="text-gray-600 flex flex-col justify-center items-center">
      <ArrowUpOnSquareIcon class="h-20 w-20 text-blue-500" />

    <div>
      Arrastra tus archivos aquí o

      <span class="text-blue-600 underline cursor-pointer font-medium" @click="triggerFileInput">
        explora
      </span>
    </div>

  </div>

    <ul v-if="files.length" class="mt-4 text-sm text-left text-gray-700">
      <li v-for="(file, index) in files" :key="index" class="border border-gray-200 p-2 rounded mb-2">
        {{ file.name }}
      </li>
    </ul>
  </div>
</template>


