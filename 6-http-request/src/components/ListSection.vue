<template>
    <TodoList />
    <ResultBar />
</template>
<script>
import TodoList from '@/components/TodoList'
import ResultBar from '@/components/ResultBar'
export default {
    components:{
        ResultBar,
        TodoList
    }
    
}
</script>