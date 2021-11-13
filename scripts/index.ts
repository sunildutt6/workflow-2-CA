import { createProduct } from "./helpers/objectHelpers";
import { propertyId } from "./helpers/objectHelpers";

const newProduct: propertyId = createProduct({
  id: 12,
  code: "d f g",
  title: "This is the title of the product, it will be truncated",
});

console.log(newProduct);
