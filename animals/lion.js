// animals/lion.js
// Returns favorite foods for Lion
export function favorites(foods) {
    const likes = ['beef', 'chicken']
    const filtered = foods.filter(food => likes.includes(food.toLowerCase()))
    console.log('[Lion.favorites] foods:', foods, 'filtered:', filtered)
    return filtered
}
// Returns disliked foods for Lion
export function dislikes(foods) {
    const dislikes = ['lettuce', 'honey']
    return foods.filter(food => dislikes.includes(food.toLowerCase()))
}
export default { name: 'Lion', favorites, dislikes };
