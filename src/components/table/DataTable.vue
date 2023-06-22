<script setup>
import {ref} from 'vue'
import { router } from '../../router/route.js'


const props = defineProps({
    table_headers: {type:Array, required: true},
    rows_data: {type:Array, required: true},
    col_names: {type:Array, reuired: true},
    name_route: {type:String, required: true}
})

// Kata felis ini jelek hrs ganti parent inject data pake props nanti di loop
// kata felis thead ny juga sampah hrs di loop biar bs di reuse
function redirect(id){
    router.push({name: props.name_route, params: { id: id }})
}
</script>

<template>
    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th v-for="header_name in table_headers"> {{header_name}} </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows_data" :key="row.id" @click="redirect(row.id)">
                <td v-for="col_name in col_names"> 
                    {{ row[col_name] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>