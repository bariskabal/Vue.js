<template>
    <app-header />
    <div class="flex flex-row">
        <SideBar @category-changed="updateBookmarkList"/> 
        <app-bookmark-list v-if="bookmarkList.length >0 " :items="bookmarkList" />   
        <div v-else>Henüz bir bookmark eklenmemiş...</div> 
    </div>
    
</template>

<script>
import SideBar from '@/components/Home/Sidebar'
export default {
    
    components:{
        SideBar
    },
    data() {
        return {
            bookmarkList:[]
        }
    },
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response=> {
            this.bookmarkList = bookmark_list_response?.data || []
        })
        this.$appAxios.get("/user_bookmarks?_expand=bookmark&_expand=user").then(user_bookmark_response=> {
            this.$store.commit("setBookmarks",user_bookmark_response?.data)
        })
        this.$appAxios.get("/user_likes?_expand=bookmark&_expand=user").then(user_like_response=> {
            this.$store.commit("setLikes",user_like_response?.data)
        })

    },
    // created() {
    //     this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
    //         console.log(bookmark_list_response)
    //         this.bookmarkList = bookmark_list_response?.data || []
    //     })
    // },
    methods: {
        updateBookmarkList(categoryId) {
            const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`;
            this.$appAxios.get(url).then(bookmark_list_response => {
                console.log(bookmark_list_response)
                this.bookmarkList = bookmark_list_response?.data || [];
        });
        }
    },
}
</script>