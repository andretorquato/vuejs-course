const app = Vue.createApp({
  data(){
    return {
      inputText: '',
      toggleInput: true,
      activeBackgroundColor: '',
    };
  },
  computed: {
    setClass() {
      if(this.inputText == 'user1'){
        return 'user1';
      } else if(this.inputText == 'user2'){
        return 'user2';
      }
    },
    setVisible() {
      return this.toggleInput ? 'visible' : 'hidden';
    },
    setStyles() {
      return { backgroundColor: this.activeBackgroundColor };
    }
  },
  methods: {
    toggleParagraph() {
      this.toggleInput = !this.toggleInput;
    },
    setBackgroundColor(e){
      this.activeBackgroundColor = e.target.value;
    }
  }
});

app.mount("#assignment");