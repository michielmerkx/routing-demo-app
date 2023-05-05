<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!-- <router-link :to="'/teams/' + id">View Members</router-link> -->
    <router-link :to="membersLink">View Members</router-link>    
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    membersLink() {
      // Cobbling routes together:
      // return '/teams/' + this.id;
      // Using named routes instead of assembling a route:
      return { 
        name: 'team-members', 
        params: { teamId: this.id },
        query: { sort: 'asc' } // not in use - just here to demonstrate options.
      };
      // Note: query params are not provided as props.
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>