import { expect } from "chai";
import Products from "./testData/products.js";
import map from "../map.js";

describe("Product mapping tests (map.js)", function () {
  it("MAP-001: should extract product names", function () {
    const result = map(Products, (product) => product.name);

    expect(result).to.deep.equal([
      "Apple Juice",
      "Whole Milk",
      "Apple Pie",
      "Fresh Bread",
    ]);
  });

  it("MAP-002: should extract product prices", function () {
    const result = map(Products, (product) => product.price);

    expect(result).to.deep.equal([3.5, 2.0, 5.0, 2.5]);
  });

  it("MAP-003: should extract product categories", function () {
    const result = map(Products, (product) => product.details.category);

    expect(result).to.deep.equal(["Drinks", "Dairy", "Bakery", ""]);
  });

  it("MAP-004: should create product summaries", function () {
    const result = map(Products, (product) => ({
      name: product.name,
      price: product.price,
    }));

    expect(result).to.deep.equal([
      { name: "Apple Juice", price: 3.5 },
      { name: "Whole Milk", price: 2.0 },
      { name: "Apple Pie", price: 5.0 },
      { name: "Fresh Bread", price: 2.5 },
    ]);
  });

  it("MAP-005: should pass the correct index to the iteratee", function () {
    const result = map(
      Products,
      (product, index) => `${index + 1}. ${product.name}`,
    );

    expect(result).to.deep.equal([
      "1. Apple Juice",
      "2. Whole Milk",
      "3. Apple Pie",
      "4. Fresh Bread",
    ]);
  });

  it("MAP-006: should pass the original array to the iteratee", function () {
    const result = map(Products, (product, index, array) => ({
      name: product.name,
      totalProducts: array.length,
    }));

    expect(result).to.deep.equal([
      { name: "Apple Juice", totalProducts: 4 },
      { name: "Whole Milk", totalProducts: 4 },
      { name: "Apple Pie", totalProducts: 4 },
      { name: "Fresh Bread", totalProducts: 4 },
    ]);
  });

  it("MAP-007: should return an empty array for an empty product list", function () {
    const result = map([], (product) => product.name);

    expect(result).to.deep.equal([]);
  });

  it("MAP-008: should return an empty array for null input", function () {
    const result = map(null, (product) => product.name);

    expect(result).to.deep.equal([]);
  });

  it("MAP-009: should not modify the original products array", function () {
    const originalProducts = [...Products];

    map(Products, (product) => product.name.toUpperCase());

    expect(Products).to.deep.equal(originalProducts);
  });
});
