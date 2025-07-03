// animals/bear.js
// Returns foods the Bear eats
export function eats(foods) {
    const likes = ['fish', 'honey']
    return foods.filter(food => likes.includes(food.toLowerCase()))
}
// Returns foods the Bear spits out
export function spitsOut(foods) {
    const dislikes = ['beef', 'lettuce']
    return foods.filter(food => dislikes.includes(food.toLowerCase()))
}
export default { name: 'Bear', eats, spitsOut };
