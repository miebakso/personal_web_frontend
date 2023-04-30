<script setup>
import MainPannel from '../MainPannel.vue'
import CategoryTable from './CategoryTable.vue'
</script>

<template>
    <div class="container-fluid">
        <div class="row pannel">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <MainPannel />
                        <button type="button" class="btn btn-success btn-custom">Create</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cold-md-12">
                <div class="card">
                    <div class="card-body">
                        <CategoryTable />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pannel {
    padding: 1em 0;
}
.btn-custom {
    margin-left: 1em;
}
/* .btn-custom {
    background-color: #fbb62d;
    border-color: #fbb62d;
    border-radius: 7px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    padding: 0 0.75em;
} */
</style>