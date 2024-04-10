import { sum } from "../sum";

test("Sun function should calculate the sum of two numbers", () => {
  const res = sum(3, 4);
  //assertion
  //expect(res).toBe(8);
  expect(res).toBe(7);
});
