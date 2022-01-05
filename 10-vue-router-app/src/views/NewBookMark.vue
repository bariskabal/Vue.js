<template>
    <div class="form-area card border p-2">
        <div class="mb-3">
            <label for="title" class="form-label">Başlık</label>
            <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="..">
        </div>
        <div class="mb-3">
            <label for="url" class="form-label">URL</label>
            <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="https://...">
        </div>
        <div class="mb-3">
            <label for="decription" class="form-label">Açıklama</label>
            <textarea v-model="userData.decription" class="form-control" placeholder="Bu var ya..." id="decription" rows="10"></textarea>
        </div>
        <div class="d-flex justify-content-end align-items-center">
            <button class="btn btn-sm btn-secondary me-2" @click="$router.push({name:'HomePage'})">İptal</button>
            <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData:{
                title: null,
                url: null,
                decription:null
            }
        }
    },
    methods: {
        
        onSave(){
            console.log(this.userData)
            this.$appAxios.post("/bookmarks",this.userData).then(save_response =>{
                console.log("save_response",save_response)
                this.resetData();
                this.$router.push("/")
            })
        },
        resetData(){
            Object.keys(this.userData).forEach(key => (this.userData[key] = null))
        }
    }
}
</script>