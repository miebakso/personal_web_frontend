<script setup>
// Libraries
import axios from 'axios'
import { ref, onMounted } from 'vue'

// Components
import BaseTemplate from '../BaseTemplate.vue'
import PannelButton from '../../top-pannel/PannelButton.vue'
import DataTable from '../../table/DataTable.vue'

// Static Data, Category col and header names
import { CATEGORY_HEADERS, COLUMN_NAMES } from './enum.js'


const categories = ref([])

// Fetch all the categories data and store it in categories variable
const fetchCategories = async() => {
    axios.get('http://127.0.0.1:8000/categories/')
    .then(response => {
        categories.value = response.data
    })
    .catch(error => {
        console.log(error)
    })
}

onMounted(async () => {
  await fetchCategories()
})


</script>

<template>
    <BaseTemplate>
        <template #pannel>
            <PannelButton name="Create" name_route="category.create" btn_css="btn btn-success" />
        </template>
        <template #content>
            <DataTable name_route="category.view" :table_headers="CATEGORY_HEADERS" :col_names="COLUMN_NAMES" :rows_data="categories"  />
        </template>
    </BaseTemplate>
</template>

<style scoped>

</style>