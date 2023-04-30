<script setup>
import { router } from '../../router/route.js'


function redirectCategory(){
    router.push({name:'category'})
}
function redirectTransaction(){
    router.push({name:'transaction'})
}
</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" @click="redirectTransaction" class="btn btn-outline-primary">Transactions</button>
        <button type="button" @click="redirectCategory" class="btn btn-outline-primary">Categories</button>
    </div>

</template>

<style scoped>
.btn-custom {
    background-color: #fbb62d;
    border-color: #fbb62d;
    border-radius: 7px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    padding: 0 0.75em;
}
</style>