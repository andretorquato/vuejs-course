<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </ul>
  <div><button @click="addUser">ADD</button><input ref="userName" type="text" /></div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        'André',
        'JP Morgan',
        'Lin',
        'Penny',
        'Naruto',
        'Claudio',
        'Fernanda',
      ],
    };
  },
	methods: {
		addUser(){
			this.users.unshift(this.$refs.userName.value);
			this.$refs.userName.value = '';
			this.$refs.userName.focus();
			
		},
		removeUser(user){
			this.users = this.users.filter(usr => usr !== user);
		}
	}
};
</script>
<style scoped>
li {
	border: 1px solid black;
	border-radius: 8px;
	margin: 8px 0 0;
	text-align:center;
	padding: 8px 14px;
	cursor: pointer;
}
li:hover {
	background: rgba(255, 3, 3, 0.815);
	border: 1px solid rgba(255, 3, 3, 0.815);
	color: white;
}
ul {
	list-style: none;
  margin: 0;
}
</style>