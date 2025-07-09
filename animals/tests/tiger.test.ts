import { describe, expect, it } from "vitest";
import tiger from "../tiger";

describe("tiger", () => {
    it("should eat only allowed foods", () => {
        expect(tiger.eats(["Beef", "Chicken", "Lettuce", "Fish"])).toEqual([
            "Beef",
            "Chicken",
            "Fish",
        ]);
    });
    it("should spit out disallowed foods", () => {
        expect(tiger.spitsOut(["Beef", "Chicken", "Lettuce", "Fish"])).toEqual([
            "Lettuce",
        ]);
    });
});
