<script setup>
// import {computed} from 'vue'
// import {useRoute} from 'vue-router'
import {collapsed} from './state.js'

const props = defineProps({
    to: {type:String, required: true},
    icon: {type:String, required: true},
    title: {type:String, required: true}
})


// const router = useRoute()
</script>

<template>
    <!-- <router-link :to="to" class="link" :class="{active: isActive}">  -->
    <router-link :to="to" class="link" >
        <font-awesome-icon :icon="icon" style="padding-right: 10px"/>
        <transition name="fade">
            <span v-if="!collapsed">{{ title}}</span>
        </transition >
    </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-action {
    transition: opacity 0.4s;
}
.link {
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 400;
    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: white;
    text-decoration: none;

    font-size: 20px;
}
.link:hover {
    background-color: var(--sidebar-item-hover);
}
.link.active {
    background-color: var(--sidebar-item-active);
}
.link.icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>

