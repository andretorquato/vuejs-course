const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },
  watch:{
    counter(value){
      if(value > 50){
        this.counter = 0;
      }
    }
  },
  computed: {
    fullName() {
      console.log('Running function');
      if(this.name == '' ||  this.lastName == ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullName(){
      console.log('Running function');
      if(this.name == ''){
        return '';
      }
      return this.name + ' ' + 'Torquato';
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
