<script setup>

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card pannel">
                    <div class="card-body">
                        <slot name="pannel">
                            
                        </slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cold-md-12">
                <div class="card">
                    <div class="card-body">
                        <slot name="content">

                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pannel {
    margin: 0.5em 0 0.5em 0 ;
}
</style>