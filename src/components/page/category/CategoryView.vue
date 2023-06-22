<script setup>
import BaseTemplate from '../BaseTemplate.vue'
import PannelButton from '../../top-pannel/PannelButton.vue'
import Category from '../../category/Category.vue'
import { onMounted, ref } from 'vue'
import { router } from '../../../router/route.js'
import axios from 'axios'

const id = ref(router.currentRoute._value.params.id)
const name = ref('')

const fetchCategoryById = async () => {
    await axios.get('http://127.0.0.1:8000/categories/'+id.value)
    .then(response => {
        name.value = response.data.name
    })
    .catch(error => {
        console.log(error)
    })
}

const deleteCategory = async () => {
    await axios.delete('http://127.0.0.1:8000/categories/'+id.value)
    .then(response => {
        router.push({name: 'category'})
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
            <div class="btn-group" role="group" aria-label="Edit/Delete buttons">
                <PannelButton name="Edit" name_route="category.update" btn_css="btn btn-warning" />
                <PannelButton name="Delete" @click="deleteCategory" btn_css="btn btn-danger" />
            </div>
        </template>
        <template #content>
            <Category :id='id' :name='name' />
        </template>
    </BaseTemplate>
</template>

<style scoped>

</style>