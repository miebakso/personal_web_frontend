<script setup>
import { watch, onMounted, reactive, computed, ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios'

const flow = ref(['year', 'month', 'calendar']);
const categories = ref([])

const format = (date) => {
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.getMonth() + 1
    return `${year}-${month}-${day}`
}

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



const props = defineProps({
    mode: {type:String, required: true},
    transaction: {type:Object, default: {
        date: new Date(),
        description: '',
        category: 1,
        total: 0,
        notes: '' 
    }},
})


const data = reactive({
    date: '',
    description: '',
    category_id: 1,
    total: 0,
    notes: ''
})

watch(
  () => props.transaction,
  (transaction) => {
    console.log('watcher')
    console.log(transaction)
    data.date = new Date(transaction.date)
    data.description = transaction.description
    data.category_id = transaction.category_id
    data.total = transaction.total
    data.notes = transaction.notes
  }
)




onMounted(async () => {
  await fetchCategories()
})


</script>

<template>
<div>
    <div class="form-floating mb-3">

        <VueDatePicker v-model="data.date" :flow="flow" :format="format" text-input ></VueDatePicker>
    
        <div class="form-floating marg">
            <input type="text" class="form-control" id="description" placeholder="Description" v-model="data.description"> 
            <label for="description">Description</label>
        </div>

        <select class="form-select marg" aria-label="Default select example">
            <option v-for="category in categories" :value="category.name" :selected="category.id==data.category_id">
                {{ category.name }}
            </option>
        </select>

        <div class="form-floating marg">
            <input type="number" class="form-control" id="total" placeholder="total spending" v-model="data.total">
            <label for="total">Total Spending</label>
        </div>

        <div class="form-floating marg">
            <textarea class="form-control" placeholder="Notes" id="notes" style="height: 100px" v-model="data.notes"></textarea>
            <label for="notes">Notes</label>
        </div>
        <button class="btn marg btn-success" @click="$emit('submitForm', data)">{{mode}}</button>
    </div>
</div>
</template>

<style scoped>
.marg {
    margin-top: 1em;
}
</style>