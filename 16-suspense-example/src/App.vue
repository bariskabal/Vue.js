<template>
<span v-if="err" class="error">{{err}}</span>
  <suspense v-else>
    <template #default>
      <div>
        <Users />
        <hr>
        <Todos />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>
<script setup>
import {ref} from 'vue'
import {onErrorCaptured,defineAsyncComponent} from "@vue/runtime-core"
const err = ref(null)
onErrorCaptured((e)=>{
  err.value = e;
  return true
})
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"))
const Users = defineAsyncComponent(() => import("./components/User.vue"))
</script>

<style>
.error{
  color: red;
  font-size: 20px;
}

</style>