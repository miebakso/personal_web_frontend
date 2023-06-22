<script setup>
import { router } from '../../router/route.js'
import PannelButton from './PannelButton.vue'

</script>

<template>
 
<div class="row pannel">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <PannelButton name_route="transaction" name="Transaction" btn_css="btn btn-outline-primary">
                    <PannelButton name_route="category" name="Category" btn_css="btn btn-outline-primary">
                </div>
                <slot>
                    
                </slot>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
.pannel {
    padding: 1em 0;
}


</style>