<script setup>
import BaseTemplate from '../BaseTemplate.vue'
import PannelButton from '../../top-pannel/PannelButton.vue'
import CategoryForm from '../../category/CategoryForm.vue'

import {ref, onMounted} from 'vue'
import axios from 'axios'
import { router } from '../../../router/route.js'



const id = ref(router.currentRoute._value.params.id)
const name = ref('')

async function updateCategory(title) {
    const category = { 
        'id': id.value, 
        'name': title
    }
    await axios.put('http://127.0.0.1:8000/categories/'+id.value, category)
    .then(response => {
        router.push({name: 'category.view', params: { id: id.value }})
    })
    .catch(error => {
        console.log(error)
    })
}

const fetchCategoryById = async () => {
    await axios.get('http://127.0.0.1:8000/categories/'+id.value)
    .then(response => {
        name.value = response.data.name
    })
    .catch(error => {
        console.log(error)
    })
}

onMounted(async () => {
  await fetchCategoryById()
})

</script>

<template>
    <BaseTemplate>
        <template #pannel>
            Update
        </template>
        <template #content>
            <CategoryForm mode="Update"  @submitForm="updateCategory" :title="name"/>
        </template>
    </BaseTemplate>
</template>

<style scoped>

</style>