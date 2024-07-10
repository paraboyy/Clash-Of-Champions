<template>
    <div class="question position-relative container">
        <div class="timer position-absolute top-0 end-0 mt-3 p-2 mx-3 bg-warning rounded">
            <span>Waktu {{ formattedTime }}</span>
        </div>
        <div class="dp-ruby text-center">
            <h1 class="mt-3 text-bold text-aqua">Board 3</h1>
        </div>
        <!-- Tambahkan konten soal di sini -->

        <div class="dp-grid place-center mt-3">
            <div class="col-md-6 col-12 mb-3">
                <img :src="imageUrl" alt="Example Image" class="ml-2 w-100 p-4" />
            </div>
            <div class="col-md-6 col-12 text-start text-white p-2">
                <div class="dp-flex">
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">A=</p>
                        <input type="text" v-model="A" placeholder="Nilai A" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">B=</p>
                        <input type="text" v-model="B" placeholder="Nilai B" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">C=</p>
                        <input type="text" v-model="C" placeholder="Nilai C" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">D=</p>
                        <input type="text" v-model="D" placeholder="Nilai D" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">E=</p>
                        <input type="text" v-model="E" placeholder="Nilai E" class="form-control mb-3" />
                    </div>
                </div>
                <div class="dp-flex">
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">F=</p>
                        <input type="text" v-model="F" placeholder="Nilai F" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">G=</p>
                        <input type="text" v-model="G" placeholder="Nilai G" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">H=</p>
                        <input type="text" v-model="H" placeholder="Nilai H" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">I=</p>
                        <input type="text" v-model="I" placeholder="Nilai I" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">J=</p>
                        <input type="text" v-model="J" placeholder="Nilai J" class="form-control mb-3" />
                    </div>
                </div>
                <div class="dp-flex">
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">K=</p>
                        <input type="text" v-model="K" placeholder="Nilai K" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">L=</p>
                        <input type="text" v-model="L" placeholder="Nilai L" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">M=</p>
                        <input type="text" v-model="M" placeholder="Nilai M" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">N=</p>
                        <input type="text" v-model="N" placeholder="Nilai N" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">O=</p>
                        <input type="text" v-model="O" placeholder="Nilai O" class="form-control mb-3" />
                    </div>
                </div>
                <div class="dp-flex">
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">P=</p>
                        <input type="text" v-model="P" placeholder="Nilai P" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">Q=</p>
                        <input type="text" v-model="Q" placeholder="Nilai Q" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">R=</p>
                        <input type="text" v-model="R" placeholder="Nilai R" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">S=</p>
                        <input type="text" v-model="S" placeholder="Nilai S" class="form-control mb-3" />
                    </div>
                    <div class="mx-1 dp-flex w-70">
                        <p class="mx-1 mt-2">T=</p>
                        <input type="text" v-model="T" placeholder="Nilai T" class="form-control mb-3" />
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-success" @click="checkAnswer">Kirim Jawaban</button>
                    <button class="btn btn-danger mx-2" @click="backHome">Home</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import board3 from '@/assets/board3.png.webp';
// import Swal from 'sweetalert2';

export default {
    data() {
        return {
            elapsedTime: 0,
            timer: null,
            imageUrl: board3,
            userAnswer: '',
            A: '',
            B: '',
            C: '',
            D: '',
            E: '',
            F: '',
            G: '',
            H: '',
            I: '',
            J: '',
            K: '',
            L: '',
            M: '',
            N: '',
            O: '',
            P: '',
            Q: '',
            R: '',
            S: '',
            T: '',
            correctAnswers: 0,
            incorrectAnswers: 0,
        };
    },
    computed: {
        formattedTime() {
            const minutes = Math.floor(this.elapsedTime / 60);
            const seconds = this.elapsedTime % 60;
            return `${minutes}m ${seconds}s`;
        }
    },
    created() {
        this.startTimer();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        startTimer() {
            let startTime = localStorage.getItem('startTime');
            if (!startTime) {
                startTime = Date.now();
                localStorage.setItem('startTime', startTime);
            }
            this.timer = setInterval(() => {
                this.elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            }, 1000);
        },
        checkAnswer() {
            let correct = 0;
            let incorrect = 0;
            const answers = { A: '76', B: '-9', C: '125', D: '15', E: '26', 
                              F: '-50', G: '2', H: '3', I: '31', J: '12', 
                              K: '168', L: '5', M: '6', N: '77', O: '44', 
                              P: '29', Q: '81', R: '3', S: '11', T: '7'
                            };

            for (const key in answers) {
                if (this[key] === answers[key]) {
                    correct++;
                } else {
                    incorrect++;
                }
            }

            this.correctAnswers = correct;
            this.incorrectAnswers = incorrect;

            Swal.fire({
                icon: correct === Object.keys(answers).length ? 'success' : 'error',
                title: correct === Object.keys(answers).length ? 'Jawaban benar!' : 'Jawaban salah',
                text: `Jawaban Benar: ${correct}\nJawaban Salah: ${incorrect}`,
                confirmButtonText: 'OK'
            }).then(() => {
                if (correct === Object.keys(answers).length) {
                    this.finishQuiz();
                }
            });
        },
        backHome() {
            Swal.fire({
                title: "Kembali Ke Menu Utama?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/';
                }
            });
        },
        finishQuiz() {
            clearInterval(this.timer);
            const startTime = localStorage.getItem('startTime');
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000; // Durasi dalam detik

            // Simpan waktu pengerjaan ke localStorage
            const storedTimes = localStorage.getItem('times');
            const times = storedTimes ? JSON.parse(storedTimes) : [];
            times.push(duration);
            localStorage.setItem('times', JSON.stringify(times));

            Swal.fire({
                icon: 'success',
                title: 'Jawaban benar!',
                text: `Waktu pengerjaan: ${duration} detik`,
                didClose: () => {
                    localStorage.removeItem('startTime'); // Reset start time
                    window.location.href = '/board-4';
                }
            });
        }
    }
};
</script>
