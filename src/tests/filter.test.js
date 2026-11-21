import { expect } from "chai";
import Products from "./testData/products.js";
import filterProducts from "../filter.js";

describe("Product filtering tests (filter.js)", function () {
  it("FILTER-001: should filter products by name", function () {
    const result = filterProducts(Products, (product) =>
      product.name.toLowerCase().includes("apple"),
    );

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Apple Juice");
    expect(result[1].name).to.equal("Apple Pie");
  });

  it("FILTER-002: should filter products by category", function () {
    const result = filterProducts(
      Products,
      (product) => product.category === "Dairy",
    );

    expect(result).to.have.lengthOf(1);
    expect(result[0].name).to.equal("Whole Milk");
  });

  it("FILTER-003: should filter products by price", function () {
    const result = filterProducts(Products, (product) => product.price <= 2.5);

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Whole Milk");
    expect(result[1].name).to.equal("Fresh Bread");
  });

  it("FILTER-004: should filter products by contents", function () {
    const result = filterProducts(Products, (product) =>
      product.contents.toLowerCase().includes("apple"),
    );

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Apple Juice");
    expect(result[1].name).to.equal("Apple Pie");
  });

  it("FILTER-005: should filter products by producer", function () {
    const result = filterProducts(
      Products,
      (product) => product.producer === "Farm A",
    );

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Apple Juice");
    expect(result[1].name).to.equal("Apple Pie");
  });

  it("FILTER-006: should find products with a missing optional category", function () {
    const result = filterProducts(
      Products,
      (product) => product.category === "",
    );

    expect(result).to.have.lengthOf(1);
    expect(result[0].name).to.equal("Fresh Bread");
  });

  it("FILTER-007: should return an empty array when no products match", function () {
    const result = filterProducts(Products, (product) => product.price > 100);

    expect(result).to.deep.equal([]);
  });

  it("FILTER-008: should handle an empty product list", function () {
    const result = filterProducts([], (product) => product.price < 5);

    expect(result).to.deep.equal([]);
  });

  it("FILTER-009: should combine name, category and price filters", function () {
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

  it("FILTER-010: should include products without a category when filtering by price", function () {
    const result = filterProducts(Products, (product) => product.price < 5);

    expect(result).to.have.lengthOf(3);
    expect(result[0].name).to.equal("Apple Juice");
    expect(result[1].name).to.equal("Whole Milk");
    expect(result[2].name).to.equal("Fresh Bread");
  });

  it("FILTER-011: should return products in the Dairy category or without a category", function () {
    const result = filterProducts(
      Products,
      (product) => product.category === "Dairy" || product.category === "",
    );

    expect(result).to.have.lengthOf(2);
    expect(result[0].name).to.equal("Whole Milk");
    expect(result[1].name).to.equal("Fresh Bread");
  });
});
