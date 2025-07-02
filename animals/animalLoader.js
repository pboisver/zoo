// animals/animalLoader.js
// Simple loader for all animal modules using manifest and static imports
import lion from './lion.js';
import tiger from './tiger.js';
import bear from './bear.js';

export function loadAnimals() {
  return [lion, tiger, bear];
}
