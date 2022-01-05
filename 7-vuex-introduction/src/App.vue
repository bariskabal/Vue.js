<template>
  <!-- <p>{{$store.state.theme}}</p>
  <ul>
    <li v-for="permission in $store.state.permissions" :key="permission">{{permission}}</li>
  </ul> -->
  <p></p>
  <UserList />
  <NewUser />

</template>

<script>
import UserList from '@/components/UserList'
import NewUser from '@/components/NewUser'


export default {
  name: 'App',
  components: {
    UserList,
    NewUser
  },
  created() {
    // console.log(this.$store.state.person)
    // console.log(this.$store.state.theme)
    // console.log(this.$store.getters.woodItems)
    //console.log('this.activeUser :>>',this._activeUser)
  },
}
</script>


