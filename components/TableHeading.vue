<template>
    <div class="row heading-top">
        <div class="col" v-for="(col,idx) in columns" :key="idx" :style="{ width: columnWidth, textAlign: textAlign }">
            {{ col | capitializeFirstLetter }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        center: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array,
            required: true
        }
    },
    mounted() {
        //
    },
    data: () => {
        return {
            //
        }
    },
    computed: {
        columns: function() {
            let keys = Object.keys(this.items[0])
            return keys;
        },
        columnWidth: function() {
            return String(100 / this.items.length) + '%';
        },
        textAlign() {
            
            if(this.center) {
                return 'center';
            }

            return 'left';
        }
    },
    filters: {
        capitializeFirstLetter(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}   
</script>

<style>
.heading-top {
    font-weight: bold;
}
</style>
