import type { Animal } from "./Animal";

const lion: Animal = {
    name: "Lion",
    eats: (foods) =>
        foods.filter((f) => ["Beef", "Chicken", "Fish"].includes(f)),
    spitsOut: (foods) =>
        foods.filter((f) => !["Beef", "Chicken", "Fish"].includes(f)),
};

export default lion;
