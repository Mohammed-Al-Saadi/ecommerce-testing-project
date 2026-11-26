
import { expect } from "chai";
import filter from "../filter.js";
import get from "../get.js";
import reduce from "../reduce.js";
import toNumber from "../toNumber.js";
import Products from "./testData/products.js";

describe("Shopping cart integration test", function () {
  it("adds items, removes an item, and recalculates the total", function () {
    // We add 2 products to the shopping cart with different quantities.
    const cart = [
      { product: Products[0], quantity: 2 },
      { product: Products[1], quantity: 3 },
    ];

    // Then we calculate the initial cart total using reduce function.
    // We use get() to retrieve the product price and quantity.
    // toNumber() converts both values to numbers before multiplication.
    const initialTotal = reduce(
      cart,
      (total, item) =>
        total +
        toNumber(get(item, "product.price")) *
          toNumber(get(item, "quantity")),
      0,
    );

    // Apple Juice: 3.50 * 2 = 7.00
    // Whole Milk: 2.00 * 3 = 6.00
    // Expected initial total: 13.00
    expect(initialTotal).to.equal(13);

    // We remove Whole Milk from the cart using filter function.
    // Using get() to retrieve each product ID for comparison.
    const deleteItems = filter(
      cart,
      (item) => get(item, "product.id") !== Products[1].id,
    );

    // Check that only one product remains in the cart.
    expect(deleteItems).to.have.lengthOf(1);

    // Recalculate the total after removing Whole Milk.
    const updatedTotal = reduce(
      deleteItems,
      (total, item) =>
        total +
        toNumber(get(item, "product.price")) *
          toNumber(get(item, "quantity")),
      0,
    );

    // Only Apple Juice remains: 3.50 * 2 = 7.00
    expect(updatedTotal).to.equal(7);
  });
});
