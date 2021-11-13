import { createProduct } from "../helpers/objectHelpers";

test("product validation creation works", () => {
  expect(
    createProduct({ id: 1, code: "jhon", title: "this is the product" })
  ).toEqual({ id: 1, code: "JHON", title: "this_is_the_" });
});
