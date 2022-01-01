<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to teams t2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  props: ['teamId'],
  data() {
    return {
      teamName: 'Test',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const selectedMembers = [];
      const members = selectedTeam.members;
      for (let memberId of members) {
        const selectedUser = this.users.find((user) => user.id === memberId);
        selectedMembers.push(selectedUser);
      }
      this.teamName = selectedTeam.name;
      this.members = selectedMembers;
    },
  },
  created() {
    this.loadTeamMembers(this.teamId);
    const query = this.$route.query;
    console.log(query);
  },
  watch: {
    teamId(newValue){
      this.loadTeamMembers(newValue);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
