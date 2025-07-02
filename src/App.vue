<template>
  <div class="container layout">
    <div class="left-panel">
      <FoodSelector @feed="handleFeed" />
    </div>
    <div class="right-panel animal-panels">
      <AnimalPanel v-for="animal in animals" :key="animal.name"
                   :name="animal.name" :matchedFoods="animal.foods" :dislikedFoods="animal.dislikedFoods" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FoodSelector from './components/FoodSelector.vue'
import AnimalPanel from './components/AnimalPanel.vue'
import { loadAnimals } from '@zoo/animals/animalLoader.js'

const animals = ref([])

onMounted(() => {
  animals.value = loadAnimals().map(animal => ({
    name: animal.name,
    foods: [],
    dislikedFoods: [],
    favorites: animal.favorites,
    dislikes: animal.dislikes
  }))
})

function handleFeed(selectedFoods) {
  animals.value.forEach(animal => {
    animal.foods = animal.favorites(selectedFoods)
    animal.dislikedFoods = animal.dislikes(selectedFoods)
    console.log(animal.name, 'likes:', animal.foods, 'dislikes:', animal.dislikedFoods)
  })
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.left-panel {
  flex: 1 1 200px;
  max-width: 300px;
}
.right-panel {
  flex: 2 1 0;
}
.left-panel, .right-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
