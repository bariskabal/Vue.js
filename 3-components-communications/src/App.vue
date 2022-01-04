<template>
  <div class="container">
    <UserSection :userList="userList" @new-item="userList.push($event)" />
  </div>
</template>

<script>
import UserSection from "@/components/UserSection"
export default {
  components:{
    UserSection
  },
  data() {
    return {
      userList : ["Barış","Kabal","Muhammet","Ordu"]
    }
  }
}
</script>