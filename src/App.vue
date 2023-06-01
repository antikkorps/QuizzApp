<script setup>
import q from './data/data.json';
import { ref } from 'vue';

const quizzes = ref(q);
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <div class="card">
        <img
          src="https://aup.imgix.net/user_images/164014/private-lessons-math-analysis-algebra-probability-statistics-arabic-1616583057.jpg"
          alt=""
        />
        <div class="card-text">
          <h2>Math</h2>
          <p>15 Questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

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

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

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
