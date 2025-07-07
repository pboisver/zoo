<template>
  <div class="container layout">
    <div class="left-panel">
      <FoodSelector @feed="handleFeed" />
    </div>
    <div class="right-panel animal-panels">
      <AnimalPanel v-for="animal in animalsRef" :key="animal.name" :name="animal.name" :eats="animal.eats"
        :spitsOut="animal.spitsOut" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FoodSelector from './components/FoodSelector.vue'
import AnimalPanel from './components/AnimalPanel.vue'
import animals from '@zoo/animals'

const animalsRef = ref(animals.map(animal => ({
  name: animal.name,
  eats: animal.eats([]),
  spitsOut: animal.spitsOut([])
})))

function handleFeed(selectedFoods) {
  animalsRef.value.forEach((animal, i) => {
    animal.name = animals[i].name
    animal.eats = animals[i].eats(selectedFoods)
    animal.spitsOut = animals[i].spitsOut(selectedFoods)
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

.left-panel,
.right-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
