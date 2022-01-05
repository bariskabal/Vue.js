<template>
    <div>
        <li class="d-flex justify-content-between align-items-center">
            <span>{{item.title}}</span>
            <DeleteSection :deleteItem="item"/>
        </li>
    </div>
</template>
<script>
import DeleteSection from '@/components/DeleteSection'
export default {
    components:{
        DeleteSection
    },
    props: ["item"],
    inject: ["itemList"]
}
</script>