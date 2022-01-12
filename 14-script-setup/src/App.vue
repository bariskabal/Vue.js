<template>
  <h3>{{title}}</h3>
  <input type="text" v-model="title">
  <button @click="inc" >{{counter}}</button>
  <hr>
  <oddOrEven :counter="counter" @odd-event="alertMe"/>

  <hr>
  <h1>User App</h1>
  <input type="text" v-model="state.personal.name">
  <input type="text" v-model="state.personal.lname">
  {{state.personal.name}} {{state.personal.lname}}
</template>

<script setup>
// beforeCreate() created() ve data () yerine geçer ---> setup

import {ref,reactive,watch} from "vue"
import oddOrEven from "./components/oddOrEven.vue"
import Utils from "./composables/Utils"

const {title,counter,inc,alertMe} = Utils()


// UserApp -- Obje kullanılacaksa ref yerine reactive

const state = reactive({
  personal : {
    name : "null",
    lname : null
  }
})

watch(()=>JSON.parse(JSON.stringify(state.personal)),(newP,oldP)=>{
  console.log(newP,oldP)
})

console.log(state.personal.name)
</script>