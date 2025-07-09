import { describe, expect, it } from "vitest";
import elephant from "../animals/elephant";

describe("elephant", () => {
    it("should eat only allowed foods", () => {
        expect(elephant.eats(["Beef", "Chicken", "Lettuce", "Fish", "Honey"]))
            .toEqual(["Lettuce", "Honey"]);
    });
    it("should spit out disallowed foods", () => {
        expect(
            elephant.spitsOut(["Beef", "Chicken", "Lettuce", "Fish", "Honey"]),
        )
            .toEqual(["Beef", "Chicken", "Fish"]);
    });
});
