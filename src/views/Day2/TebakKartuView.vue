<template>
    <div class="game-container">
        <div id="timer" class="text-warning mt-2 text-bold">Time Remaining: {{ formattedTime }}</div>
        <div id="card-container">
            <Card v-for="(card, index) in shuffledCards" :key="index" :card="card" v-show="showCards" />
        </div>
        <h1 class="text-aqua text-bold" v-if="showCards">INGAT KARTU!!!</h1>
        <div class="w-50 dp-in-block text-center" v-if="showGuess">
            <h1 class="text-aqua text-bold">TEBAK KARTU!!!</h1>
            <p class="text-white text-bold">
                Pada babak kali ini survivor disuruh untuk menebak 30 kartu, yang dimulai dari kartu ke-1 sampai ke-30.
                Sebelum babak tebak kartu dimulai survivor dikasih waktu 1 menit untuk mengingat 30 kartu tersebut
            </p>
            <button v-if="!gameStarted" @click="startGame" class="btn-2">Start Game</button>
        </div>
        <div id="guess-container" v-if="showGuessForm">
            <h1 class="text-aqua text-bold">TEBAK KARTU!!!</h1>
            <div class="bg-light p-2 br-5 dp-ruby-2 m-4">
                <div v-for="(card, index) in shuffledCards" :key="index" class="guess-input">
                    <span class="text-dark mt-1 w-50 text-center">{{ index + 1 }}</span>
                    <input v-model="guesses[index].value" placeholder="Value" class="guess-input-field">
                    <select v-model="guesses[index].suit" class="guess-select-field">
                        <option disabled value="">Select Suit</option>
                        <option value="♠">♠ Spades</option>
                        <option value="♥">♥ Hearts</option>
                        <option value="♦">♦ Diamonds</option>
                        <option value="♣">♣ Clubs</option>
                    </select>
                </div>
            </div>
            <button @click="checkGuesses" class="btn btn-success mt-3">Cek Jawaban</button>
        </div>
        <div id="result" class="text-white text-bold">{{ resultMessage }}</div>
    </div>
</template>

<script>
import Card from '../../components/Card.vue';

export default {
    data() {
        return {
            cards: [],
            shuffledCards: [],
            gameStarted: false,
            showCards: false,
            showGuessForm: false,
            showGuess: true,
            timeRemaining: 60,
            timerInterval: null,
            guesses: [],
            resultMessage: '',
            startTime: null,
            endTime: null,
        };
    },
    components: {
        Card,
    },
    computed: {
        formattedTime() {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        },
    },
    methods: {
        startGame() {
            this.gameStarted = true;
            this.generateCards();
            this.shuffleCards();
            this.showCards = true;
            this.showGuess = false;
            this.startTimer();
            this.startTime = new Date();
        },
        generateCards() {
            const suits = ['♠', '♥', '♦', '♣'];
            const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

            this.cards = [];

            for (let suit of suits) {
                for (let value of values) {
                    this.cards.push({ suit, value });
                }
            }
        },
        shuffleCards() {
            this.shuffledCards = [...this.cards];
            for (let i = this.shuffledCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.shuffledCards[i], this.shuffledCards[j]] = [this.shuffledCards[j], this.shuffledCards[i]];
            }
            this.shuffledCards = this.shuffledCards.slice(0, 30);
            this.guesses = this.shuffledCards.map(() => ({ value: '', suit: '' }));
        },
        startTimer() {
            this.timeRemaining = 60;
            this.timerInterval = setInterval(() => {
                if (this.timeRemaining > 0) {
                    this.timeRemaining--;
                } else {
                    clearInterval(this.timerInterval);
                    this.showCards = false;
                    this.showGuessForm = true;
                    this.showGuess = false;
                }
            }, 1000);
        },
        checkGuesses() {
            let correctCount = 0;
            for (let i = 0; i < this.shuffledCards.length; i++) {
                if (this.guesses[i].value === this.shuffledCards[i].value && this.guesses[i].suit === this.shuffledCards[i].suit) {
                    correctCount++;
                }
            }

            this.showGuessForm = false;
            this.showGuess = false;

            if (correctCount === this.shuffledCards.length) {
                this.endTime = new Date();
                const duration = Math.floor((this.endTime - this.startTime) / 1000);
                Swal.fire({
                    title: 'Congratulations!',
                    text: `You guessed all cards correctly in ${duration} seconds!`,
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Round Selanjutnya',
                    cancelButtonText: 'Home'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.resetGame();
                        window.location.href = '/board-1';
                    } else {
                        this.resetGame();
                        window.location.href = '/';
                    }
                });
            } else {
                Swal.fire({
                    title: 'Jawaban Salah',
                    text: `Jawaban Kamu benar ${correctCount} dari ${this.shuffledCards.length} kartu!`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then(() => {
                    this.showGuessForm = true;
                });
            }
        },
        resetGame() {
            this.gameStarted = false;
            this.showCards = false;
            this.showGuessForm = false;
            this.showGuess = true;
            this.guesses = [];
            this.resultMessage = '';
        }
    },
};
</script>

