var app = new Vue({ 
    el: '#app',
    data: {
        playerEntry: '',
        players: [],
        scores: null,
        curPlayer: 0,
        gameRunning: false,
        curScore: 0
    },
    methods: {
      addPlayer() {
        this.players.push(this.playerEntry)
        this.playerEntry = ''
      },
      removePlayer(player) {
        let idx = this.players.indexOf(player)
        this.players.splice(idx, 1)
      },
      startGame() {
        this.scores = new Map()
        for (let player = 0; player < this.players.length; ++player) {
          this.scores.set(this.players[player], [0])
        }
        this.gameRunning = true
        console.log(this.gameRunning)
        console.log (this.scores)
      },
      addPoints() {
        this.scores.get(this.players[this.curPlayer]).push(parseInt(this.curScore))
        this.curScore = null
        console.log(this.scores)
        console.log(this.curPlayer)
        console.log(this.players.length)
      },
      nextPlayer() {
        this.curPlayer = (this.curPlayer + 1) % this.players.length
      },
      prevPlayer() {
        this.curPlayer = (this.curPlayer + this.players.length - 1) % this.players.length
      },
      totalScore(player) {
        let getSum = function(total, num) {
          return total + num
        }
        return this.scores.get(player).reduce(getSum)
      },
      showTotals(player) {
        let accumulatedScore = 0;
        let scoreString = ''
        for (let i=1; i<this.scores.get(player).length; ++i) {
          accumulatedScore += this.scores.get(player)[i]
          scoreString += (accumulatedScore + "\n")
        }
        alert("Scores for " + player + ":\n" + scoreString)
      }
    },
    watch: {
      players() {
        console.log(this.players)
      }
    }
});