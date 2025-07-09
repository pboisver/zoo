import { describe, expect, it } from "vitest";
import bear from "../bear";

describe("bear", () => {
    it("should eat only allowed foods", () => {
        expect(bear.eats(["Beef", "Chicken", "Lettuce", "Fish", "Honey"]))
            .toEqual(["Chicken", "Fish", "Honey"]);
    });
    it("should spit out disallowed foods", () => {
        expect(bear.spitsOut(["Beef", "Chicken", "Lettuce", "Fish", "Honey"]))
            .toEqual(["Beef", "Lettuce"]);
    });
});
