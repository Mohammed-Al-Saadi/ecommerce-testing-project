import { expect } from "chai";
import Products from "./testData/products.js";
import filterProducts from "../filter.js";

describe("Product filtering tests (filter.js)", function () {
  it("should filter products by name", function () {
    const result = filterProducts(Products, (product) =>
      product.name.toLowerCase().includes("apple"),
    );

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Apple Juice");
    expect(result[1].name).to.equal("Apple Pie");
  });

  it("should filter products by category", function () {
    const result = filterProducts(
      Products,
      (product) => product.category === "Dairy",
    );

    expect(result).to.have.lengthOf(1);
    expect(result[0].name).to.equal("Whole Milk");
  });

  it("should filter products by price", function () {
    const result = filterProducts(Products, (product) => product.price <= 2.5);

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Whole Milk");
    expect(result[1].name).to.equal("Fresh Bread");
  });

  it("should filter products by contents", function () {
    const result = filterProducts(Products, (product) =>
      product.contents.toLowerCase().includes("apple"),
    );

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Apple Juice");
    expect(result[1].name).to.equal("Apple Pie");
  });

  it("should filter products by producer", function () {
    const result = filterProducts(
      Products,
      (product) => product.producer === "Farm A",
    );

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Apple Juice");
    expect(result[1].name).to.equal("Apple Pie");
  });

  it("should find products with a missing optional category", function () {
    const result = filterProducts(
      Products,
      (product) => product.category === "",
    );

    expect(result).to.have.lengthOf(1);
    expect(result[0].name).to.equal("Fresh Bread");
  });

  it("should return an empty array when no products match", function () {
    const result = filterProducts(Products, (product) => product.price > 100);

    expect(result).to.deep.equal([]);
  });

  it("should handle an empty product list", function () {
    const result = filterProducts([], (product) => product.price < 5);

    expect(result).to.deep.equal([]);
  });

  it("should combine name, category and price filters", function () {
    const result = filterProducts(
      Products,
      (product) =>
        product.name.toLowerCase().includes("apple") &&
        product.category === "Drinks" &&
        product.price < 5,
    );

    expect(result).to.have.lengthOf(1);
    expect(result[0].name).to.equal("Apple Juice");
  });

  it("should include products without a category when filtering by price", function () {
    const result = filterProducts(Products, (product) => product.price < 5);

    expect(result).to.have.lengthOf(3);
    expect(result[0].name).to.equal("Apple Juice");
    expect(result[1].name).to.equal("Whole Milk");
    expect(result[2].name).to.equal("Fresh Bread");
  });

  it("should return products in the Dairy category or without a category", function () {
    const result = filterProducts(
      Products,
      (product) => product.category === "Dairy" || product.category === "",
    );

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Whole Milk");
    expect(result[1].name).to.equal("Fresh Bread");
  });
});
