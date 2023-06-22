<script setup>

const props = defineProps({
    id: {type:String, required: true},
    name: {type:String, required: true},
})

</script>

<template>

<div class="card-body">
    <div class="row">
        <div class="col-md-1">ID </div>
        <div class="col-md-6">Name</div>
    </div>
    <div class="row">
        <div class="col-md-1">{{ id }} </div>
        <div class="col-md-6">{{ name }}</div>
    </div>
</div>

</template>

<style scoped>

</style>