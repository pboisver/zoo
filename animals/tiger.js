// animals/tiger.js
// Returns favorite foods for Tiger
export function favorites(foods) {
    const likes = ['beef', 'chicken']
    return foods.filter(food => likes.includes(food.toLowerCase()))
}
// Returns disliked foods for Tiger
export function dislikes(foods) {
    const dislikes = ['lettuce', 'fish']
    return foods.filter(food => dislikes.includes(food.toLowerCase()))
}
export default { name: 'Tiger', favorites, dislikes };
