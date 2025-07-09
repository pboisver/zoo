import type { Animal } from "./Animal";

const bear: Animal = {
    name: "Bear",
    eats: (foods) =>
        foods.filter((f) => ["Fish", "Honey", "Chicken"].includes(f)),
    spitsOut: (foods) =>
        foods.filter((f) => !["Fish", "Honey", "Chicken"].includes(f)),
};

export default bear;
