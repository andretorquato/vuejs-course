<template>
  <section class="container">
    <div>
    <h2>{{ usrName }}</h2>
    <h2>{{ usrAge }}</h2>
    <button @click="changeAge" class="change-age">Change</button>
    </div>
    <input type="text" placeholder="your first Name" v-model="firstName" />
    <input type="text" placeholder="your last Name" v-model="lastName" />
  </section>
  
</template>

<script>
import { reactive, toRefs, ref, computed, watch } from 'vue';
export default {
  setup() {
    // const userName = ref('André Torquato')
    // const userAge = ref(25);
    const user = reactive({
      name: 'André Torquato',
      age: 25,
    });
    const { age } = toRefs(user);
    const firstName = ref('');
    const lastName = ref('');
    const fullName = computed(() => `${firstName.value} ${lastName.value}`);
    setTimeout(() => {
      // userName.value = 'Só André';
      // userAge.value = 26;
      user.name = 'Só André';
      user.age = 26;
    }, 2000);

    watch(age, (newValue, oldValue) => {
      console.log(`oldValue: ${oldValue}`);
      console.log(`newValue: ${newValue}`);
    });

    function changeAge() {
      // userAge.value++;
      user.age++;
    }
    // return { userName, userAge }
    return {
      user,
      usrName: fullName,
      usrAge: age,
      changeAge,
      firstName,
      lastName,
    };
  },
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
