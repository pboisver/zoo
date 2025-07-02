// animals/bear.js
// Returns favorite foods for Bear
export function favorites(foods) {
    const likes = ['fish', 'honey']
    return foods.filter(food => likes.includes(food.toLowerCase()))
}
// Returns disliked foods for Bear
export function dislikes(foods) {
    const dislikes = ['beef', 'lettuce']
    return foods.filter(food => dislikes.includes(food.toLowerCase()))
}
export default { name: 'Bear', favorites, dislikes };
