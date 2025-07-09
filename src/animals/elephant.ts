import type { Animal } from "@zoo/animals";

const elephant: Animal = {
    name: "Elephant",
    eats: (foods) => foods.filter((f) => ["Lettuce", "Honey"].includes(f)),
    spitsOut: (foods) => foods.filter((f) => !["Lettuce", "Honey"].includes(f)),
};

export default elephant;
