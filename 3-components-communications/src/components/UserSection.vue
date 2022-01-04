<template>
    <ListSection :userList="userList" />
    <AddSection @new-item="$emit('new-item',$event)"/>
</template>

<script>
import AddSection from "@/components/AddSection"
import ListSection from "@/components/ListSection"
export default {
    props: ["userList"],
    components:{
        ListSection,
        AddSection
    }
}
</script>