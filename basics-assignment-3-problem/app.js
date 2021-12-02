const app = Vue.createApp({
  data() {
    return {
      valueOne: 0,
      valueTwo: 0,
    };
  },
  watch: {
    valueOne() {
      setTimeout(() => {
        this.valueOne = 0;
      }, 5000);
    },
    valueTwo(){
      setTimeout(() => {
        this.valueTwo = 0;
      }, 5000);
    }
  },
  computed: {
    result() {
      return this.valueOne + this.valueTwo;
    },
    congratulation() {
      if(this.result == 37){
        return "Too much!"
      } else {
        return "Not there yet";
      }
    }
  },
  methods: {
    addFive(){
      this.valueOne += 5;
    },
    addOne() {
      this.valueTwo += 1;
    }
  }
});

app.mount("#assignment");
