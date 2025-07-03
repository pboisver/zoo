// animals/lion.js
// Returns foods the Lion eats
export function eats(foods) {
    const likes = ['beef', 'chicken']
    const filtered = foods.filter(food => likes.includes(food.toLowerCase()))
    console.log('[Lion.eats] foods:', foods, 'filtered:', filtered)
    return filtered
}
// Returns foods the Lion spits out
export function spitsOut(foods) {
    const dislikes = ['lettuce', 'honey']
    return foods.filter(food => dislikes.includes(food.toLowerCase()))
}
export default { name: 'Lion', eats, spitsOut };
