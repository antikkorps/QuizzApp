<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { quizz } = defineProps(['quizz']);

const navigateToQuizz = () => {
  router.push(`/quizz/${quizz.id}`);
};
</script>

<template>
  <div class="card" @click="navigateToQuizz">
    <img :src="quizz.img" alt="" />
    <div class="card-text">
      <h2>{{ quizz.name }}</h2>
      <p>{{ quizz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
/* CARD */

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 200px;
  margin: 0;
  object-fit: cover;
}
.card .card-text {
  padding: 20px;
}
.card .card-text h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
