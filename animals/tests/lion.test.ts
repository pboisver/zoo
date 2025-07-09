import { describe, expect, it } from "vitest";
import lion from "../lion";

describe("lion", () => {
    it("should eat only allowed foods", () => {
        expect(lion.eats(["Beef", "Chicken", "Lettuce", "Fish"])).toEqual([
            "Beef",
            "Chicken",
            "Fish",
        ]);
    });
    it("should spit out disallowed foods", () => {
        expect(lion.spitsOut(["Beef", "Chicken", "Lettuce", "Fish"])).toEqual([
            "Lettuce",
        ]);
    });
});
