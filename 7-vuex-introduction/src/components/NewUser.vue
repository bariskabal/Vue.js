<template>
      <button @click="updateName">Yeni item ekle</button>
</template>

<script>
export default {
    methods: {
    updateName(){
        const newUser = {id:new Date().getTime(),title:"Raf"+new Date().getTime(),type:"Mobilya"}
      this.$store.dispatch("newItem",newUser)
      //this.$store.state.itemList.push()
      this.$store.state.fullName = new Date().getTime()
    }
  }
}
</script>