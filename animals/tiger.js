// animals/tiger.js
// Returns foods the Tiger eats
export function eats(foods) {
    const likes = ['beef', 'chicken']
    return foods.filter(food => likes.includes(food.toLowerCase()))
}
// Returns foods the Tiger spits out
export function spitsOut(foods) {
    const dislikes = ['lettuce', 'fish']
    return foods.filter(food => dislikes.includes(food.toLowerCase()))
}
export default { name: 'Tiger', eats, spitsOut };
