<template>
    <div class="question position-relative container">
        <div class="timer position-absolute top-0 end-0 p-2 mx-3 bg-warning rounded">
            <span>Waktu {{ formattedTime }}</span>
        </div>
        <h1 class="mt-3 text-center text-bold text-aqua">Round 2</h1>
        <!-- Tambahkan konten soal di sini -->

        <div class="row mt-3">
            <div class="col-md-6 col-12 mb-3">
                <img :src="imageUrl" alt="Example Image" class="ml-2 w-100 p-4" />
            </div>
            <div class="col-md-6 col-12 text-start text-white p-4">
                <h1 class="text-bold text-aqua">Penjumlahan Angka Pola Heksagon</h1>
                <p class="text-bold text-justify">Pada round kedua, peserta harus menghitung penjumlahan di mana
                    terdapat empat angka yang terdapat dalam satu buah heksagon. Total ada 90 kolom heksagon.<br>

                    <br>Namun hanya 89 yang jika angkanya dijumlahkan dapat menghasilkan (18). Ada satu heksagon yang
                    jika dijumlahkan
                    angkanya hanya menghasilkan (16).<br>

                    <br>Pola pada setiap heksagon memiliki bilangan operasi masing-masing.
                    Dalam round kedua, peserta harus menghitung hasil operasi bilangan yang ada di tiap heksagon.
                </p>
                <input type="text" v-model="userAnswer" placeholder="Masukkan jawaban Anda" class="form-control mb-3" />
                <div class="d-flex justify-content-center">
                    <button class="btn btn-success" @click="checkAnswer">Kirim Jawaban</button>
                    <button class="btn btn-danger mx-2" @click="backHome">Home</button>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import round2 from '@/assets/round2.jpg';

export default {
    data() {
        return {
            elapsedTime: 0,
            timer: null,
            imageUrl: round2,
            userAnswer: ''
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
            if (this.userAnswer === '1618') {
                this.finishQuiz();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Jawaban salah',
                    text: 'Coba lagi!'
                });
            }
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
                    window.location.href = '/round-3';
                }
            });
        }
    }
};
</script>
