
import { expect } from "chai";
import * as td from "testdouble";
import Products from "./testData/products.js";

// Create stubs
const sliceStub = td.function("slice");
const toIntegerStub = td.function("toInteger");

// Replace the real dependencies
await td.replaceEsm("../slice.js", {
  default: sliceStub,
});

await td.replaceEsm("../toInteger.js", {
  default: toIntegerStub,
});

// Import chunk after replacing its dependencies
const { default: chunk } = await import("../chunk.js");

describe("chunk() with stubs", function () {
  it("CHUNK-001: splits products into equal chunks", function () {
    td.when(toIntegerStub(2)).thenReturn(2);

    td.when(sliceStub(Products, 0, 2)).thenReturn([Products[0], Products[1]]);
    td.when(sliceStub(Products, 2, 4)).thenReturn([Products[2], Products[3]]);

    const result = chunk(Products, 2);

    expect(result).to.deep.equal([
      [Products[0], Products[1]],
      [Products[2], Products[3]],
    ]);
  });

  it("CHUNK-002: splits products with remaining products", function () {
    td.when(toIntegerStub(3)).thenReturn(3);

    td.when(sliceStub(Products, 0, 3)).thenReturn([
      Products[0],
      Products[1],
      Products[2],
    ]);

    td.when(sliceStub(Products, 3, 6)).thenReturn([Products[3]]);

    const result = chunk(Products, 3);

    expect(result).to.deep.equal([
      [Products[0], Products[1], Products[2]],
      [Products[3]],
    ]);
  });

  it("CHUNK-003: uses the default chunk size of 1", function () {
    td.when(toIntegerStub(1)).thenReturn(1);

    td.when(sliceStub(Products, 0, 1)).thenReturn([Products[0]]);
    td.when(sliceStub(Products, 1, 2)).thenReturn([Products[1]]);
    td.when(sliceStub(Products, 2, 3)).thenReturn([Products[2]]);
    td.when(sliceStub(Products, 3, 4)).thenReturn([Products[3]]);

    const result = chunk(Products);

    expect(result).to.deep.equal([
      [Products[0]],
      [Products[1]],
      [Products[2]],
      [Products[3]],
    ]);
  });

  it("CHUNK-004: returns one chunk when size is larger than the array", function () {
    td.when(toIntegerStub(5)).thenReturn(5);

    td.when(sliceStub(Products, 0, 5)).thenReturn([
      Products[0],
      Products[1],
      Products[2],
      Products[3],
    ]);

    const result = chunk(Products, 5);

    expect(result).to.deep.equal([
      [Products[0], Products[1], Products[2], Products[3]],
    ]);
  });

  it("CHUNK-005: returns an empty array for an empty product list", function () {
    td.when(toIntegerStub(2)).thenReturn(2);

    const result = chunk([], 2);

    expect(result).to.deep.equal([]);
  });

  it("CHUNK-006: returns an empty array when chunk size is zero", function () {
    td.when(toIntegerStub(0)).thenReturn(0);

    const result = chunk(Products, 0);

    expect(result).to.deep.equal([]);
  });

  it("CHUNK-007: returns an empty array when chunk size is negative", function () {
    td.when(toIntegerStub(-2)).thenReturn(-2);

    const result = chunk(Products, -2);

    expect(result).to.deep.equal([]);
  });
});
