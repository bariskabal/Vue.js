<template>
    <ul>
    <li v-for="item in _woodItems" :key="item">{{item.title}}</li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed : {
    ...mapGetters(["_woodItems","_activeUser"]),
    // ...mapGetters({
    //   agacElemanlari : "woodItems" 
    // })
    // customComputed(){}
    }
}
</script>