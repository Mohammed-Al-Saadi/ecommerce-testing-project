import { expect } from "chai";

describe("Integer conversion tests (toInteger.js)", function () {
  let toInteger;

  before(async function () {
    ({ default: toInteger } = await import("../toInteger.js"));
  });

  it("TOINTEGER-001: truncates positive fractions toward zero", function () {
    expect(toInteger(3.9)).to.equal(3);
    expect(toInteger(0.9)).to.equal(0);
  });

  it("TOINTEGER-002: truncates negative fractions toward zero", function () {
    expect(toInteger(-3.9)).to.equal(-3);
    expect(toInteger(-0.9)).to.equal(0);
  });

  it("TOINTEGER-003: converts numeric strings to integers", function () {
    expect(toInteger("12.8")).to.equal(12);
    expect(toInteger(" -4.6 ")).to.equal(-4);
  });

  it("TOINTEGER-004: returns integer values unchanged", function () {
    expect(toInteger(0)).to.equal(0);
    expect(toInteger(-7)).to.equal(-7);
  });

  it("TOINTEGER-005: converts invalid values to zero", function () {
    expect(toInteger("not a number")).to.equal(0);
    expect(toInteger(NaN)).to.equal(0);
    expect(toInteger(undefined)).to.equal(0);
  });

  it("TOINTEGER-006: clamps infinite values to the largest finite number", function () {
    expect(toInteger(Infinity)).to.equal(Number.MAX_VALUE);
    expect(toInteger(-Infinity)).to.equal(-Number.MAX_VALUE);
  });
});
