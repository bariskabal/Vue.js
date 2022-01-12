<template>
    <h1>aa</h1>
    <h3>{{result}}</h3>
</template>

<script setup>
import {computed, watch} from "vue"
    const props = defineProps({counter: Number})   
    const emit = defineEmits()
    const result = computed(()=>(props.counter % 2 == 0 ? 'Çift' : 'Tek')) 

    watch(result,(result)=>{
        if (result === "Tek") emit("odd-event",true)
    })
</script>