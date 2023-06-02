<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const { numberOfCorrectAnswers, quizzQuestionLength } = defineProps([
  'quizzQuestionLength',
  'numberOfCorrectAnswers',
]);
</script>
<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>{{ numberOfCorrectAnswers }}/{{ quizzQuestionLength }}</h1>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}
p {
  font-size: 30px;
  margin-bottom: 20px;
}
h1 {
  font-size: 100px;
  margin: 0;
}
</style>
