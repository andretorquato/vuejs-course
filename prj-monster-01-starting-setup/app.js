function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
  data() {
    return {
      currentRound: 0,
      logMessages: [],
      monsterHealth: 100,
      playerHealth: 100,
      winner: null,
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: `${this.monsterHealth}%` };
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      }
      return { width: `${this.playerHealth}%` };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startNewGame() {
      this.currentRound = 0;
      this.logMessages = [];
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.addLogMessage('player', 'attack', attackValue);
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 12);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialMonsterAttack() {
      this.currentRound++;
      const attackValue = getRandomValue(12, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.addLogMessage('player', 'attack', attackValue);
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
      this.addLogMessage('player', 'heal', healValue);
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, action, attackValue){
      this.logMessages.unshift({
        actionBy: who,
        action: action,
        actionValue: attackValue,
      });
    }
  },
});

app.mount("#game");
