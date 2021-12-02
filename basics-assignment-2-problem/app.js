const app = Vue.createApp({
  data(){
    return {
      contentSave: '',
      contentConfirm: '',
    };
  },
  methods: {
    save(e){
      this.contentSave = e.target.value;
    },
    confirm(e){
      this.contentConfirm = e.target.value;
    },
    showAlert(){
      alert(`Congratulations!`);
    }
  }
});

app.mount("#assignment");