<script setup>
import q from '../data/data.json';
import { ref } from 'vue';
import { watch } from 'vue';
import Card from '../components/Card.vue';
import gsap from 'gsap';

const quizzes = ref(q);
const search = ref('');

// Watch for changes in the search input and filter the quizzes
watch(search, () => {
  quizzes.value = q.filter((quizz) =>
    quizz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

// beforeEnter function for the transition
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(-100px)';
};

// enter function for the transition
const enter = (el) => {
  gsap.to(el, {
    duration: 0.3,
    opacity: 1,
    translateY: 0,
    delay: el.dataset.index * 0.3,
  });
};
</script>

<template>
  <div>
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <transition-group
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnterw"
      >
        <Card
          v-for="(quizz, index) in quizzes"
          :key="quizz.id"
          :quizz="quizz"
          :data-index="index"
        />
      </transition-group>
      <!-- <div v-for="quizz in quizzes" :key="quizz.id" class="card">
        <img :src="quizz.img" alt="" />
        <div class="card-text">
          <h2>{{ quizz.name }}</h2>
          <p>{{ quizz.questions.length }} Questions</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
}

header h1 {
  margin-right: 30px;
  font-weight: bold;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

header input:focus {
  outline: none;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>
