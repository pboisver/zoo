<template>
  <div class="food-selector">
    <h3>Foods</h3>
    <div v-for="item in foodList" :key="item" class="food-item">
      <input type="checkbox" :id="item" :value="item" v-model="selected" />
      <label :for="item">{{ item }}</label>
    </div>
    <div class="feed-btn-container">
      <button @click="emit('feed', selected)">Feed</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Updated food list to match all animals' likes/dislikes
const foodList = ['Beef', 'Chicken', 'Lettuce', 'Fish', 'Honey']
const selected = ref([])
const emit = defineEmits(['feed'])
</script>

<style scoped>
.food-selector h3 {
  text-align: left;
}

.food-item {
  display: flex;
  align-items: center;
  text-align: left;
}

.feed-btn-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.feed-btn-container button {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1.2em;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}

.feed-btn-container button:hover {
  background: #1565c0;
}
</style>
