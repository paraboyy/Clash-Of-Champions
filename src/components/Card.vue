<template>
    <div class="card">{{ card.value }} {{ card.suit }}</div>
</template>

<script>
export default {
    props: {
        card: Object,
    },
};
</script>

<style scoped>
.card {
    width: 60px;
    height: 90px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid #000;
    border-radius: 5px;
}
</style>
