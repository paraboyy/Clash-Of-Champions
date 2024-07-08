<template>
    <div class="question position-relative">
        <div class="timer position-absolute top-0 end-0 p-2 mx-3 bg-warning rounded">
            <span>Waktu {{ formattedTime }}</span>
        </div>
        <h1 class="mt-3 text-center text-bold text-aqua">Round 3</h1>
        <!-- Tambahkan konten soal di sini -->

        <div class="dp-flex mt-3">
            <div class="w-50">
                <img :src="imageUrl" alt="Example Image" class="ml-2 w-100 p-4" />
            </div>
            <div class="w-50 text-start text-white p-4">
                <h1 class="text-bold text-aqua">Penjumlahan Angka Pola Heksagon</h1>
                <p class="text-bold text-justify">Terdapat 80 operasi bilangan dalam tabel soal. Pola pada setiap
                    heksagon memiliki bilangan operasi masing-masing.<br>
                    
                    <br>Dalam round ketiga peserta harus menghitung hasil
                    operasi bilangan yang ada di tiap heksagon. Operasi bilangan tersebut akan berbeda-beda meliputi
                    perkalian, pembagian, pengurangan, hingga bilangan pangkat.
                </p>
                <input type="text" v-model="userAnswer" placeholder="Masukkan jawaban Anda" class="form-control mb-3" />
                <button class="btn btn-success" @click="checkAnswer">Submit Jawaban</button>
                <button class="btn btn-danger mx-2" @click="backHome">Back Home</button>
            </div>
        </div>
    </div>
</template>

<script>
import round3 from '@/assets/round3.jpg';

export default {
    data() {
        return {
            elapsedTime: 0,
            timer: null,
            imageUrl: round3,
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
            if (this.userAnswer === '4609') {
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
                    window.location.href = '/finis';
                }
            });
        }
    }
};
</script>
