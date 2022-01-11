<template>
    <div>
        <small class="text-green-300">{{completed}} adet tamamlanmış task bulunuyor</small>
    </div>  
    <div>
        <small class="text-red-300">{{unCompleted}} adet tamamlanmamış task bulunuyor</small>
    </div>
</template>

<script>
import {computed} from "vue"
export default {
    props:{
        todoList : Array
    },
    setup(props) {
        const completed = computed(()=> props.todoList.filter((i)=>i.completed).length) 
        const unCompleted = computed(()=> props.todoList.filter((i)=> !i.completed).length) 
        return {completed,unCompleted}
    }
}
</script>