const app = Vue.createApp({
  data() {
    return {
    courseGoal: 'Teste',

    vueLink: 'https://vuejs.org/',
    }
  },
  methods: {
    showMessage() {
      if(Math.random() > 0.5){
        return '<h1>Vue is Nice!</h1>'
      }else {
        return '<h1>Vue is not Cool!</h1>'
      }
    }
  }
});

app.mount('#user-goal');