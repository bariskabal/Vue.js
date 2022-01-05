<template>
    <button @click="onDelete(item)" class="sm red">Sil</button>
</template>
<script>
export default {
    props:["item"],
    inject:["onDelete"]
}
</script>