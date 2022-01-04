<template>
    <h3 class="bg-blue text-white">Blue Component</h3>
    <input type="text" />
</template>

<script>
export default {
    mounted() {
        console.log("blue mounted ")
    },
    activated() {
        console.log("blue activated")
    },
    deactivated() {
        console.log("blue deactivated")
    }
}
</script>