<template>
<app-header />
<div class="container">
  <h3>Bu benim ilk Vue CLI Uygulamam</h3>
</div>
<CounterItem/>
<!--<benim-güzel-sayacim/>-->
</template>


<script>
import CounterItem from '@/components/CounterItem.vue'
export default {
  components:{
    CounterItem,
    //"benim-güzel-sayacim" : CounterItem

  }
}
</script>