<template>
  <!-- <button @click="confirmInput">Confirm</button> -->
  <ul>
    <user-item v-for="user in users" 
    :key="user.id" 
    :name="user.fullName" 
    :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    // confirmInput(){
    //   this.$router.push('/teams')
    // }
  },
  // Possible navigation guard
  beforeRouteEnter(to, from, next){
    console.log(to, from)
    next();
  },
  // Another possible navigation guard
  // beforeRouteLeave(to, from, next){
  //   console.log(to, from)
  //   if (changesSaved){ next()} 
  //   else 
  //   { 
  //     const userWantsToLeave = confirm('You have unsaved changes!') 
      // Pass true or false in here based on user confirmation
  //     next(userWantsToLeave)
  //   }
  // }

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>