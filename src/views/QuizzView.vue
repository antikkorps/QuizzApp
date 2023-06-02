<script setup>
import Question from '../../src/components/Question.vue';
import QuizzHeader from '../../src/components/QuizzHeader.vue';
import Result from '../../src/components/Result.vue';

import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue';
import quizzes from '../data/data.json';

const route = useRoute();

const quizzId = parseInt(route.params.id);

const quizz = quizzes.find((quizz) => quizz.id === quizzId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

// //define the state of the question status
// const questionStatus = ref(
//   `${currentQuestionIndex.value + 1}/${quizz.questions.length}`
// );

// watch(
//   //function to watch
//   () => currentQuestionIndex.value,
//   //function to run when the watched value changes
//   () => {
//     questionStatus.value = `${currentQuestionIndex.value + 1}/${
//       quizz.questions.length
//     }`;
//   }
// );
//  Other way to write the function is to use computed

// define the state of the question status
const questionStatus = computed(
  () => `${currentQuestionIndex.value + 1}/${quizz.questions.length}`
);

const progress = computed(
  () => `${(currentQuestionIndex.value / quizz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quizz.questions.length === currentQuestionIndex.value + 1) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizzHeader :questionStatus="questionStatus" :progress="progress" />
    <div>
      <Question
        v-if="!showResults"
        :question="quizz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result
        v-else
        :quizzQuestionLength="quizz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
    </div>
  </div>
</template>

<style scoped></style>
