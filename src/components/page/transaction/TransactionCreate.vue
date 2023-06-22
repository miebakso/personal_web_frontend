<script setup>
import BaseTemplate from '../BaseTemplate.vue'
import CategoryForm from '../../category/CategoryForm.vue'

import { router } from '../../../router/route.js'
import {ref} from 'vue'

import axios from 'axios'



async function createCategory(title) {
    const category = { 'name': title};
    await axios.post('http://127.0.0.1:8000/categories/', category)
    .then(response => {
        router.push({name: 'category' })
    })
    .catch(error => {
        console.log(error)
    })
}


</script>

<template>
    <BaseTemplate>
        <template #pannel>
            <h2>Category</h2>
        </template>
        <template #content>
            <CategoryForm mode="Create"  @submitForm="createCategory" title="" />
        </template>
    </BaseTemplate>
</template>

<style scoped>

</style>