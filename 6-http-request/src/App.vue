<template>
  <div class="container">
    <ListSection/>
  </div>
</template>

<script>

import axios from 'axios'
import ListSection from '@/components/ListSection'
export default {
  components:{
    ListSection
  },
  data() {
    return {
        itemList: []
    }
  },
  provide(){
    return{
      itemCount : this.itemCount,
      itemList : this.itemList,
      onSave: this.onSave,
      onDelete : this.onDelete,
      listLength : this.itemList.length,
    }
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(items_response=>{
      console.log(items_response.data, "mounted 1 ")
      this.itemList = items_response.data || []
      console.log(this.itemCount, "Mounted 2 ")
    })
  },
  methods: {
    onSave(e){
      const saveObject = {
        title : e.target.value,
        created_at : new Date(),
        completed : false
      }
      axios.post("http://localhost:3000/items",saveObject).then(save_response => {
        console.log(save_response)
        this.itemList.push(save_response.data)
        e.target.value = ''
        e.target.focus()
      })
    },
    onDelete(e){
      axios.delete(`http://localhost:3000/items/${e.id}`).then(delete_response =>{
        this.itemList = this.itemList.filter(i=> i.id != e.id)
        console.log(delete_response)
      })
    }
  },
  computed:{
    itemCount(){
      console.log(this.itemList.length,"computed ")
      return this.itemList.length || 0
    }
  }
}
</script>