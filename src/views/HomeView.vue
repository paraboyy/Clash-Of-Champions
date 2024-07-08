<template>
  <div class="welcome p-5">
    <div class=" justify-content-center dp-flex">
      <img :src="imageUrl" alt="Example Image" class="ml-2 w-60" />
    </div>
    <div class="text-center">
      <h3 class="text-white">Hello Survivor, Selamat Datang di Clash Of Champions by Ruangguru <br>
        <span class="text-aqua">Klik</span> button <span class="text-aqua">start</span> untuk menguji kemampuan
        anda
      </h3>
      <button class="btn-2" @click="startCountdown">Start</button>
      <div v-if="countdown > 0" class="countdown">{{ countdown }}</div>
    </div>
  </div>
</template>

<script>
import foto from '@/assets/coc.png.webp';

export default {
  data() {
    return {
      countdown: 0,
      timer: null,
      imageUrl: foto,
    };
  },
  methods: {
    startCountdown() {
      this.countdown = 3;
      this.timer = setInterval(() => {
        this.countdown--;
        if (this.countdown === 0) {
          clearInterval(this.timer);
          this.startQuiz();
        }
      }, 1000);
    },
    startQuiz() {
      const startTime = Date.now();
      localStorage.setItem('startTime', startTime);
      localStorage.removeItem('times');
      this.$router.push('/question');
    }
  }
};
</script>
