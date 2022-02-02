<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
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
    enterCancelled() {
      console.log('enter cancelled');
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      console.log('leave cancelled');
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('before enter');
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      let count = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = count * 0.1;
        count++;
        if (count >= 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log('after enter');
    },
    beforeLeave() {
      console.log('before leave');
    },
    leave(el, done) {
      console.log('leave');
      let count = 50;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = count * 0.1;
        el.style.transform = `translateY(-${count}px)`;
        count--;
        if (count <= 0) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 100);
    },
    afterLeave() {
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
.route-enter-active {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.route-leave-active {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
    backwards;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse backwards;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>