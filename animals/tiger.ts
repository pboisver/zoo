import type { Animal } from "./Animal";

const tiger: Animal = {
    name: "Tiger",
    eats: (foods) =>
        foods.filter((f) => ["Beef", "Chicken", "Fish"].includes(f)),
    spitsOut: (foods) =>
        foods.filter((f) => !["Beef", "Chicken", "Fish"].includes(f)),
};

export default tiger;
