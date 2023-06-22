<script setup lang="ts">

import Sidebar from './components/sidebar/Sidebar.vue'
import {sidebarWidth} from './components/sidebar/state.js'

</script>

<template>
  <main>
    <Sidebar />
    <div class="main-screen" :style="{'margin-left': sidebarWidth}">
      <router-view :key="$route.path">

      </router-view>
    </div>
  </main>
</template>

<style scoped>
.main-screen {
  
  top: 0;

}

</style>
