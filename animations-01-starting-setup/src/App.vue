<template>
  <div class="container">
    <div class="block" :class="{ animation: isAnimate }"></div>
    <button @click="onAnimate">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
      name="para"
    >
      <p v-if="isVisibleParagraph">Show paragraph</p>
    </transition>
    <button @click="showParagraph">Show</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-if="showUsers" @click="toggleUser">Show Users</button
      ><button v-else @click="toggleUser">Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      isAnimate: false,
      isVisibleParagraph: false,
      dialogIsVisible: false,
      showUsers: true,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled(){
      console.log('enter cancelled');
      clearInterval(this.enterInterval);
    },
    leaveCancelled(){
      console.log('leave cancelled');
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el){
      console.log('before enter');
      el.style.opacity = 0;
    },
    enter(el, done){
      console.log('enter');
      let count = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = count * 0.1;
        count++;
        if(count >= 100){
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
      
    },
    afterEnter(){
      console.log('after enter');
    },
    beforeLeave(){
      console.log('before leave');
    },
    leave(el, done){
      console.log('leave');
      let count = 50;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = count * 0.1;
        el.style.transform = `translateY(-${count}px)`;
        count--;
        if(count <= 0){
          clearInterval(this.leaveInterval);
          done();
        }
      }, 100);
    },
    afterLeave(){
      console.log('after leave');
    },
    toggleUser() {
      this.showUsers = !this.showUsers;
    },
    onAnimate() {
      this.isAnimate = !this.isAnimate;
    },
    showParagraph() {
      this.isVisibleParagraph = !this.isVisibleParagraph;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 1s ease-in-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animation {
  /* transform: translateX(-100px); */
  animation: boo-peep 5s forwards;
}
@keyframes boo-peep {
  0% {
    transform: scale(0.5);
  }
  25% {
    transform: scale(0);
  }
  50% {
    transform: translateX(-100px) scale(0.5);
  }
  60% {
    transform: translateX(-100px) scale(1);
  }
  75% {
    transform: translateX(-100px) scale(0.5);
  }
  80% {
    transform: translateX(-100px) scale(1);
  }
  100% {
    transform: scale(1);
  }
}

.fade-button-enter-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 1s ease-in;
}
.fade-button-enter-from {
  opacity: 1;
}
.fade-button-leave-to {
  opacity: 1;
}
.fade-button-leave-from {
  opacity: 0;
}
.fade-button-leave-active {
  transition: opacity 1s ease-out;
}
</style>