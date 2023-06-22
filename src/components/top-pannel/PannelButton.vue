<script setup>
import { router } from '../../router/route.js'

const props = defineProps({
    name_route: {type:String},
    name: {type:String, required: true},
    btn_css: {type: String}
})

function redirect( route_name){
    router.push({name: route_name})
}
</script>

<template>
    <button type="button" @click="redirect(name_route)" :class="btn_css">{{ name }}</button>
</template>

<style scoped>

</style>