<script setup>
import { computed, ref, onMounted, watch, defineProps } from 'vue'

const props = defineProps({
    mode: {type:String, required: true},
    title: {type:String},
})

const result = ref('')

watch(() => props.title, (title) => {
  result.value = title
});

</script>

<template>
<div>
    <div class="form-floating mb-3">
        <input 
          type="input" 
          class="form-control" 
          id="floatingInput" 
          placeholder="The name of the category" 
          v-model="result" 
        >
        <label for="floatingInput">Category</label>
        <button class="btn btn-custom btn-success" @click="$emit('submitForm', result)">{{mode}}</button>
    </div>
</div>
</template>

<style scoped>
.btn-custom {
    margin-top: 1em;
}
</style>