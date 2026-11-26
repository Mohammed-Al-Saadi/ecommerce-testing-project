import { expect } from "chai";
import Products from "./testData/products.js";
import get from "../get.js";

describe("get() tests for product data", function () {
  it("GET-001: retrieves the product name", function () {
    const result = get(Products[0], "name");
    expect(result).to.equal("Apple Juice");
  });

  it("GET-002: retrieves the producer name", function () {
    const result = get(Products[0], "producer.name");
    expect(result).to.equal("Farm A");
  });

  it("GET-003: retrieves product ingredients", function () {
    const result = get(Products[0], "details.contents");
    expect(result).to.equal("Apple");
  });

  it("GET-004: retrieves product stock quantity", function () {
    const result = get(Products[0], "stock.quantity");
    expect(result).to.equal(15);
  });

  it("GET-005: returns a default value for missing product weight", function () {
    const result = get(Products[3], "details.weight", "Not specified");
    expect(result).to.equal("Not specified");
  });

  it("GET-006: returns a default value for a null product", function () {
    const result = get(null, "name", "Unknown product");
    expect(result).to.equal("Unknown product");
  });

  it("GET-007: retrieves all producer information", function () {
    const result = get(Products[0], "producer");
    expect(result).to.deep.equal(Products[0].producer);
  });

  it("GET-008: retrieves a nested property using an array path", function () {
    const result = get(Products[0], ["stock", "quantity"]);
    expect(result).to.equal(15);
  });
  it("GET-009: returns undefined when the path is empty", function () {
    const result = get(Products[0], []);
    expect(result).to.be.undefined;
  });
});
