<template>
<div class="card border p-2 ">
    <div class="d-flex justify-content-end">
    <button class="btn btn-primary btn-sm" @click="$router.push({name:'NewBookMark'})">+ Yeni ekle</button>
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Başlık</th>
            <th scope="col">URL</th>
            <th scope="col">Sil</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="i in this.bookMarkList" :key="i">
            <th scope="row">{{i.id}}</th>
            <td>{{i.title}}</td>
            <td>
                <a :href="i.url" target="_blank">{{i.url}}</a>
            </td>
            <td>
                <button @click="deleteItem(i)" class="btn btn-sm btn-danger">Sil</button>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    data() {
        return {
            bookMarkList: []
        }
    },
    created() {
        this.$appAxios.get("/bookmarks").then(bookmarks_list_response=>{
            this.bookMarkList = bookmarks_list_response.data
            console.log(bookmarks_list_response)
        })
    },
    methods: {
        deleteItem(item){
            this.$appAxios.delete(`/bookmarks/${item.id}`).then(delete_response => {
                console.log(delete_response)
                if(delete_response.status ===200){
                    this.bookMarkList = this.bookMarkList.filter(b=>b.id!=item.id)
                }
            })
        }
    },
}
</script>