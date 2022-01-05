<template>
    <h1>{{$route.params.id}}</h1>
    <p>Aciklamaları burada yer alacak</p>
    <!-- <p>{{$route.query.xd}}</p> -->
    <button @click="goBack">Geri Dön</button>
</template>


<script>
export default {
    created() {
        console.log(this.$route)
    },
    methods: {
        goBack(){
            this.$router.push("/")
        }
    },
}
</script>