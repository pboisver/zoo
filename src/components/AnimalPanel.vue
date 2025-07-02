<template>
    <div class="animal-panel">
      <h4> {{ name }} </h4>
      <div class="food-flex-row">
        <div v-if="matchedFoods.length" class="food-col">
          <strong>Likes:</strong>
          <ul class="food-list">
            <li v-for="food in matchedFoods" :key="food">{{ food }}</li>
          </ul>
        </div>
        <div v-if="dislikedFoods.length" class="food-col">
          <strong>Dislikes:</strong>
          <ul class="food-list">
            <li v-for="food in dislikedFoods" :key="food">{{ food }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['name', 'matchedFoods', 'dislikedFoods'])
  </script>

<style scoped>
.animal-panel {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.2rem;
  background: #fff;
  box-sizing: border-box;
}
.animal-panel h4 {
  text-align: left;
}
.food-flex-row {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.food-col {
  flex: 1 1 0;
}
.food-list {
  text-align: left;
  padding-left: 1.2em;
}
</style>
