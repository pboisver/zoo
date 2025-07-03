<template>
  <div class="animal-panel">
    <h4> {{ name }} </h4>
    <div class="food-flex-row">
      <div v-if="eats.length" class="food-col">
        <strong>Eats:</strong>
        <ul class="food-list">
          <li v-for="food in eats" :key="food">{{ food }}</li>
        </ul>
      </div>
      <div v-if="spitsOut.length" class="food-col">
        <strong>Spits Out:</strong>
        <ul class="food-list">
          <li v-for="food in spitsOut" :key="food">{{ food }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['name', 'eats', 'spitsOut'])
</script>

<style scoped>
.animal-panel {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.2rem;
  background: #fff;
  box-sizing: border-box;
  width: 260px;
  min-width: 220px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
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
