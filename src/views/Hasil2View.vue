<template>
    <div class="container mt-5">
        <h1 class="text-center text-white">Akumulasi Waktu Pengerjaan</h1>
        <div class="dp-ruby text-center m-1">
            <div class="bg-light p-2 br-5 w-100">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Round</th>
                            <th>Poin</th>
                            <th>Waktu Pengerjaan (detik)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(time, index) in times" :key="index">
                            <td>Round {{ index + 1 }}</td>
                            <td>{{ correct[index] }}</td>
                            <td>{{ time }}</td>
                        </tr>
                        <tr>
                            <td colspan="2"><strong>Total Poin</strong></td>
                            <td><strong>{{ totalJawaban }}</strong></td>
                        </tr>
                        <tr>
                            <td colspan="2"><strong>Total Waktu</strong></td>
                            <td><strong>{{ totalTime }}</strong></td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-success mx-2 mb-2" @click="nextRound">Babak Selanjutnya</button>
                <button class="btn btn-danger mx-2 mb-2" @click="backHome">Home</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            times: [],
            correct: []
        };
    },
    computed: {
        totalTime() {
            return this.times.reduce((acc, time) => acc + time, 0);
        },
        totalJawaban() {
            return this.correct.reduce((acc, benar) => acc + benar, 0);
        }
    },
    created() {
        this.loadTimes();
    },
    methods: {
        loadTimes() {
            const storedTimes = localStorage.getItem('times');
            const jawaban = localStorage.getItem('correct');
            if (storedTimes) {
                this.times = JSON.parse(storedTimes);
            }
            if (jawaban) {
                this.correct = JSON.parse(jawaban);
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
        nextRound (){
            window.location.href = '/Day-4';
        }
    }
};
</script>