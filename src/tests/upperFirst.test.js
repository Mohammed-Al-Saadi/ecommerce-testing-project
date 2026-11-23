import { expect } from "chai";
import Products from "./testData/products.js";
import upperFirst from "../upperFirst.js";

describe("upperFirst() tests for product data", function () {
  it("UPPER-001: converts the first character of a lowercase product name to uppercase", function () {
    const result = upperFirst(Products[0].name.toLowerCase());

    expect(result).to.equal("Apple juice");
  });

  it("UPPERFIRST-002: keeps an already uppercase first character unchanged", function () {
    const result = upperFirst(Products[0].name);

    expect(result).to.equal("Apple Juice");
  });

  it("UPPERFIRST-003: converts the first character of product contents to uppercase", function () {
    const result = upperFirst("apple, flour");

    expect(result).to.equal("Apple, flour");
  });

  it("UPPERFIRST-004: returns an empty string for empty input", function () {
    const result = upperFirst("");

    expect(result).to.equal("");
  });

  it("UPPERFIRST-005: converts a single lowercase character to uppercase", function () {
    const result = upperFirst("a");

    expect(result).to.equal("A");
  });

  it("UPPERFIRST-006: keeps a product name starting with a number unchanged", function () {
    const result = upperFirst("123 bread");

    expect(result).to.equal("123 bread");
  });

  it("UPPERFIRST-007: keeps leading whitespace unchanged", function () {
    const result = upperFirst(" apple juice");

    expect(result).to.equal(" apple juice");
  });

  it("UPPERFIRST-008: preserves the remaining characters when converting the first character", function () {
    const result = upperFirst("aPPLE JUICE");

    expect(result).to.equal("APPLE JUICE");
  });
});
