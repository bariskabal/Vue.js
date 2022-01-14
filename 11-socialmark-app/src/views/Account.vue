<template>
<app-header />
<div class="flex flex-row">
    <side-bar />
    <!-- <component :is="$route.meta.componentName" :items="bookmarkList"/> -->
    <!-- <app-bookmark-list v-if="bookmarkList.length >0 " :items="bookmarkList" />   
    <div v-else>Henüz bir bookmark eklenmemiş...</div>  -->
</div>
</template>

<script setup>
import sideBar from "@/components/Account/sideBar"
import {ref,inject} from "vue"

const bookmarkList = ref([])
const appAxios = inject("appAxios")
appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
    bookmarkList.value = bookmark_list_response?.data || []
})

</script>