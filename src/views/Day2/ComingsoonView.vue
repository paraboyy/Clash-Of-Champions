<template>
    <div class="welcome p-5">
        <div class=" justify-content-center dp-flex">
            <img :src="imageUrl" alt="Example Image" class="ml-2 w-60" />
        </div>
        <div class="text-center">
            <h3 class="text-white text-bold">BABAK KE-3 SEDANG DALAM PENGEMBANGAN<br></h3>
        </div>
    </div>
</template>

<script>
import foto from '@/assets/coc.png.webp';

export default {
    data() {
        return {
            imageUrl: foto,
        };
    },
}
</script>