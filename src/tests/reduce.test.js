import { expect } from "chai";
import Products from "./testData/products.js";
import reduce from "../reduce.js";

describe("Cart and collection reduction tests (reduce.js)", function () {
  it("REDUCE-001: should calculate the total price of products with initial value", function () {
    const total = reduce(Products, (sum, product) => sum + product.price, 0);

    expect(total).to.equal(13.0);
  });

  it("REDUCE-002: should calculate cart total with quantities", function () {
    const cart = [
      { name: "Apple Juice", price: 3.5, quantity: 2 },
      { name: "Whole Milk", price: 2.0, quantity: 3 },
    ];

    const total = reduce(
      cart,
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    expect(total).to.equal(13.0);
  });

  it("REDUCE-003: should use the first element as accumulator when initial value is omitted", function () {
    const prices = [3.5, 2.0, 5.0, 2.5];
    const total = reduce(prices, (sum, price) => sum + price);

    expect(total).to.equal(13.0);
  });

  it("REDUCE-004: should group products by producer into an object", function () {
    const grouped = reduce(
      Products,
      (result, product) => {
        if (!result[product.producer.name]) {
          result[product.producer.name] = [];
        }
        result[product.producer.name].push(product.name);
        return result;
      },
      {},
    );

    expect(grouped).to.deep.equal({
      "Farm A": ["Apple Juice", "Apple Pie"],
      "Farm B": ["Whole Milk"],
      "Farm C": ["Fresh Bread"],
    });
  });

  it("REDUCE-005: should reduce an object collection", function () {
    const stock = { apples: 10, milk: 5, bread: 8 };
    const totalStock = reduce(stock, (sum, count) => sum + count, 0);

    expect(totalStock).to.equal(23);
  });

  it("REDUCE-006: should return initial value for an empty array", function () {
    const total = reduce([], (sum, item) => sum + item.price, 0);

    expect(total).to.equal(0);
  });

  it("REDUCE-007: should return undefined for an empty array without initial value", function () {
    const result = reduce([], (sum, n) => sum + n);

    expect(result).to.be.undefined;
  });

  it("REDUCE-008: should not mutate the original products array", function () {
    const originalCopy = Products.map((product) => ({ ...product }));
    reduce(Products, (sum, product) => sum + product.price, 0);

    expect(Products).to.deep.equal(originalCopy);
  });
});