<script setup>
import {ref} from 'vue'

const categories = ref([
    {
        'id': 1,
        'name': 'Groceries'
    },
    {
        'id': 2,
        'name': 'Income'
    },
    {
        'id': 3,
        'name': 'Income2'
    },
    {
        'id': 4,
        'name': 'Income3'
    }
])
</script>

<template>
    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> 1</td>
                <td> Test </td>
            </tr>
            <tr v-for="category in categories">
                <td> {{category.id}}</td>
                <td> {{category.name}}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>