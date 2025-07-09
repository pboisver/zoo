import lion from "./lion";
import tiger from "./tiger";
import bear from "./bear";
import type { Animal } from "./Animal";

const animals: Animal[] = [lion, tiger, bear];
export default animals;
export { animals, bear, lion, tiger };
export type { Animal } from "./Animal";
