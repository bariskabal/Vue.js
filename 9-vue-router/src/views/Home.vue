<template>
    <h1>Home</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Harum inventore laudantium natus esse placeat
         exercitationem dolorum quos praesentium blanditiis 
         quidem odio quod, sed ullam enim animi? Obcaecati id quod sint.
    </p>
    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
export default {
    methods: {
        goToDetails(){
            // alert(event.target.value)
            // this.$router.push(`/detay/${event.target.value}`)
            this.$router.push({
                name:"DetailPage",
                params:{
                    id: event.target.value
                },
                query:{
                    type : "DetailAuth",
                    user: "bariskabal"
                }
            })
        }
    },
}
</script>