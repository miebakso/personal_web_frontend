<script setup>
import { collapsed, toggleSidebar, sidebarWidth } from './state.js'
import  SidebarLink  from './SidebarLink.vue'

</script>

<template>
  <div class="sidebar" :style="{width: sidebarWidth}">
    
    <h1>
      <span v-if="collapsed">
        <div class="main-title-collapsed">B</div>
        <div class="main-title-collapsed">T</div>
      </span>
      <span v-else>
        <div class="main-title">Budget</div>
        <div class="main-title">Tracker</div>
      </span>
    </h1>
    <span class="collapse-icon icon" :class="{'rotate-180': collapsed}"  @click="toggleSidebar" >
      <font-awesome-icon icon="fa-solid fa-angles-left" />
    </span>
    <SidebarLink to="/category" icon="fa-solid fa-table" title=" Category"> </SidebarLink>
    <SidebarLink to="/transaction" icon="fa-solid fa-money-check-dollar" title=" Transaction"> </SidebarLink>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #296EB4;
  --sidebar-item-hover: #1789FC;
  --sidebar-item-active: #FDB833;
}
</style>

<style scoped>
.main-title-collapsed {
  text-align: center;
}
.main-title {
  margin-left: 5px;
}
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;


  transition: 0.4s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.5em;
  color: white;

  transition: 0.4s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.4s linear;
}
.icon {
  font-size: 20px;
}
</style>