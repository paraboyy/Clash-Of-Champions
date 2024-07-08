<template>
    <div class="container mt-5">
        <h1 class="text-center text-white">Akumulasi Waktu Pengerjaan</h1>
        <div class="dp-ruby text-center">
            <div class="bg-light p-2 br-5 w-60">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Round</th>
                            <th>Waktu Pengerjaan (detik)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(time, index) in times" :key="index">
                            <td>Round {{ index + 1 }}</td>
                            <td>{{ time }}</td>
                        </tr>
                        <tr>
                            <td><strong>Total Waktu</strong></td>
                            <td><strong>{{ totalTime }}</strong></td>
                        </tr>
                    </tbody>
                </table>
            <button class="btn btn-danger mx-2" @click="backHome">Back Home</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            times: []
        };
    },
    computed: {
        totalTime() {
            return this.times.reduce((acc, time) => acc + time, 0);
        }
    },
    created() {
        this.loadTimes();
    },
    methods: {
        loadTimes() {
            const storedTimes = localStorage.getItem('times');
            if (storedTimes) {
                this.times = JSON.parse(storedTimes);
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
    }
};
</script>