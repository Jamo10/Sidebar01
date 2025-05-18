<script setup>
import FileUploader from './components/FileUploader.vue';
import {
  HomeIcon
  , ArchiveBoxIcon
  , Cog8ToothIcon
  , ChartBarIcon
  , UserCircleIcon
} from '@heroicons/vue/24/solid'

const iconMap = {
  home: HomeIcon,
  archivo: ArchiveBoxIcon,
  configuracion: Cog8ToothIcon,
  reportes: ChartBarIcon,
}

const menuItems = [
  { id: 1, text: 'Inicio', icon: 'home' },
  { id: 2, text: 'Archivos', icon: 'archivo' },
  { id: 3, text: 'Configuración', icon: 'configuracion' },
  { id: 4, text: 'Reportes', icon: 'reportes' },
]
</script>

<template>
  <div class="h-screen bg-gradient-to-b from-blue-500 to-blue-100">
    <header class="fixed top-0 left-0 w-full bg-white shadow-2xl flex items-center justify-between px-6 py-2 z-10">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <!-- Puedes reemplazar esto con una imagen si tienes logo -->
        <div class="text-xl font-bold text-blue-600">MyCompany</div>
      </div>

      <!-- Usuario -->
      <div class="flex items-center text-gray-700 font-medium">
        <UserCircleIcon class="h-9 w-9"/>
        <span class="pl-2">
          user name
        </span>
      </div>
    </header>

    <div class="flex pt-12 h-full">
      <!-- Sidebar con espacio arriba e izquierda -->
      <aside class="w-60 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl pt-4 pb-4 mt-4 ml-4">
        <div class="mb-4">
          <h2 class="text-xl font-bold text-gray-800 text-center">Mi Panel</h2>
          <div class="h-1 w-5/7 bg-gray-100 mt-2 mx-auto"></div>
        </div>

        <nav>
          <ul>
            <li v-for="item in menuItems" :key="item.text"
              class="mb-2 hover:text-blue-700 text-gray-500 font-bold transition-colors duration-200 relative group">
              <!-- Distintivo -->
              <span
                class="hidden group-hover:block absolute right-0 top-0 h-full w-2 bg-blue-500 rounded-r-md transition-all duration-200"></span>
              <a href="#" class="flex items-center px-2 py-3.5 hover:bg-gray-100 pl-9">
                <component :is="iconMap[item.icon]" class="h-5 w-5" />
                <span class="pl-2">{{ item.text }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Contenido principal -->
      <main class="flex-1 p-6 bg-gray-50 mt-4 ml-4 mr-4">
        <h1 class="text-2xl font-bold text-gray-800">Contenido principal</h1>
        <p class="mt-4 text-gray-600">
          <FileUploader />

        </p>
      </main>
    </div>
  </div>
</template>
