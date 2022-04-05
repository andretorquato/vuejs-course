<template>
  <section class="container">
    <h2>{{ usrName }}</h2>
    <h2>{{ usrAge }}</h2>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup(){
    
    // const userName = ref('André Torquato')
    // const userAge = ref(25);
    const user = reactive({
      name: 'André Torquato',
      age: 25
    }); 
    setTimeout(() => {
      // userName.value = 'Só André';
      // userAge.value = 26;
      user.name = 'Só André';
      user.age = 26;
    }, 2000);

    const { name, age } = toRefs(user);
    // return { userName, userAge }
    return { user, usrName: name, usrAge: age }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>