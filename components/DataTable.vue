<template>
    <div class="table">
        <data-table-heading :center="center" :items="items"></data-table-heading>

        <div v-for="(item, idx) in items" :key="idx">
            <data-table-row :center="center" :items="items" :obj="item"></data-table-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array, 
            default: function() {
                return [
                    { name: 'Banana', price: 0.30 },
                    { name: 'Apple', price: 0.10 }
                ]
            }
        },
        center: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.table {
    padding: 14px;
    color: rgba(0,0,0,0.6);
    border: 1px solid rgba(0,0,0,0.05);
    background: rgba(0,0,0,0.03);
}
.row {
    display: flex; 
    padding: 4px;
}
.col {
    width: auto;
    padding-left:10px;
}
</style>
