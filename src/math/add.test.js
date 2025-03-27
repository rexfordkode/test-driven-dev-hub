const { sum, minus } = require("./add");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 1 + 2 to equal 3", () => {
  expect(sum(4, 5)).toBe(9);
});
test("minus 2-1 to equal 1", () => {
  expect(minus(2, 1)).toBe(1);
});
test("minus 4-1 to equal 3", () => {
  expect(minus(4, 1)).toBe(3);
});
console.log("heatmap");
