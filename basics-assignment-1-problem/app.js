const app = Vue.createApp({
  data() {
    return {
      name: 'André Torquato',
      age: 19,
      imageUrl: 'https://images.unsplash.com/photo-1635110982103-c918aa21d9b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      inputValue: 'Time out',
    }
  },
  methods: {
    generateRandomNumber(){
      return Math.random().toFixed(2);
    }
  }
});

app.mount('#assignment');