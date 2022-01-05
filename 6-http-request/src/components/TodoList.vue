<template>
    <div>
    <h3>Alışveriş Listesi</h3>
    <hr>
    <AddSection />
      {{ itemList }}
      {{listLength}}
    <ul v-if="listLength > 0">
        <TodoListItem v-for="item in itemList" :key="item.id" item="todoItem"/>
    </ul>
    <div v-else class="bg-blue text-white">
        Herhangi bir ürün yoktur. 
    </div>
    </div>
</template>
<script>
import AddSection from '@/components/AddSection'
import TodoListItem from '@/components/TodoListItem'

export default {
  created() {
    console.log(TodoListItem, "crateddeyim")
  },
  data(){
    return {

    }
  },
    components:{
        TodoListItem,
        AddSection
    },

    inject: ["itemList","onSave","listLength"]
    
}
</script>