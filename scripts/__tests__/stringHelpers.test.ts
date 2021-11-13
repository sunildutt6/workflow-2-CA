import {
  limitLength,
  makeUppercase,
  replaceSpaces,
} from "../helpers/stringHelpers";

/* 1st test */

test("validation uppercase works", function () {
  expect(makeUppercase("jhon")).toBe("JHON");
});

/*2nd test */

test("validation replaceSpaces works", () => {
  expect(replaceSpaces(" jhon ")).toBe("_jhon_");
});

/*3rd test */

test("validation limitLength works", () => {
  expect(limitLength(2, "jhon")).toBe("jh");
});
