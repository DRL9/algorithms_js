import { test, expect } from "vitest";
import { Dice, getProbability } from "../libs/dice";

test("should getProbality is right", () => {
  let dice1 = new Dice(2, [1 / 2, 1 / 2]);
  expect(getProbability(dice1, 2)).toBeCloseTo(1 / 4);

  let dice2 = new Dice(6, Array(6).fill(1 / 6));
  expect(getProbability(dice2, 2)).toBeCloseTo(((1 / 6) * 1) / 6);
});
