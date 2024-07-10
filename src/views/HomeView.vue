<template>
  <div class="welcome">
    <nav>
      <div class="text-center mt-2">
        <ul class="dp-flex place-center-2">
          <li class="nav-item">
            <a class="nav-link" href="/question">Round 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Day-2">Round 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/board-1">Round 3</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class=" justify-content-center dp-flex">
      <img :src="imageUrl" alt="Example Image" class="ml-2 col-md-6 col-12" />
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
      // localStorage.setItem('startTime', 0);
      this.$router.push('/question');
    }
  }
};
</script>
