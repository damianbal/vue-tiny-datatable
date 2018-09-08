<template>
    <div class="row">
        <div class="col" v-for="(obj,idx) in obj" :key="idx" :style="{ width: columnWidth, textAlign: textAlign }">
            {{ obj }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        center: {
            type: Boolean,
            default: false
        },
        items: {
            type: Array,
            required: true 
        },
        obj: {
            type: Object,
            required: true
        }
    },
    computed: {
        columnWidth: function() {
            return String(100 / this.items.length) + '%';
        },
        textAlign() {
            
            if(this.center) {
                return 'center';
            }

            return 'left';
        }
    }
}
</script>

<style>

</style>
