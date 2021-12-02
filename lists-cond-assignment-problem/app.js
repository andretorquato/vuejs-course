const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      showListTasks: true,
      enteredInputTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.enteredInputTask != "") {
        this.tasks.push({
          id: `A${Math.round(
            Math.random() * this.tasks.length * 999
          )}B${Math.round(Math.random() * this.tasks.length * 99)}`,
          description: this.enteredInputTask,
        });
        this.enteredInputTask = "";
      }
      console.log(this.tasks);
    },
    handleShowList() {
      this.showListTasks = !this.showListTasks;
    },
  },
});

app.mount("#assignment");
