import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";

export interface propertyId {
  id: number;
  code: string;
  title: string;
}

export function createProduct(propertyId: propertyId) {
  return {
    id: propertyId.id,
    code: makeUppercase(propertyId.code),
    title: limitLength(12, replaceSpaces(propertyId.title)),
  };
}
