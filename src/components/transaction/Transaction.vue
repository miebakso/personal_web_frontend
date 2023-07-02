<script setup>

const props = defineProps({
    transaction: {type:Object, required: true},
})

</script>

<template>

<div class="card-body">
    <div class="row">
        <div class="col-md-1">ID </div>
        <div class="col-md-2">Date</div>
        <div class="col-md-2">Category</div>
        <div class="col-md-3">Description</div>
        <div class="col-md-1">total</div>
        <div class="col-md-3">notes</div>
    </div>
    <div class="row">
        <div class="col-md-1">{{ transaction.id }} </div>
        <div class="col-md-2">{{ transaction.date }}</div>
        <div class="col-md-2">{{ transaction.category }}</div>
        <div class="col-md-3">{{ transaction.description }}</div>
        <div class="col-md-1">{{ transaction.total }}</div>
        <div class="col-md-3">{{ transaction.notes }}</div>
    </div>
</div>

</template>

<style scoped>

</style>