<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        to: {
            type: String,
        }
    })
</script>


<template>
    <RouterLink 
        :to="{ name: to}"
        class="font-bold font-display block md:inline-block rounded-md bg-blue-600 hover:bg-blue-500 py-2 px-3 text-white uppercase text-sm shadow"
    >
        <slot></slot>
    </RouterLink>
</template>
