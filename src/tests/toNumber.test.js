import { expect } from "chai";
import toNumber from "../toNumber.js";

describe("Number conversion tests (toNumber.js)", function () {
  it("TONUMBER-001: should return number values as is", function () {
    expect(toNumber(3.5)).to.equal(3.5);
    expect(toNumber(0)).to.equal(0);
    expect(toNumber(-10)).to.equal(-10);
    expect(toNumber(Infinity)).to.equal(Infinity);
  });

  it("TONUMBER-002: should convert numeric strings to numbers", function () {
    expect(toNumber("3.50")).to.equal(3.5);
    expect(toNumber("100")).to.equal(100);
    expect(toNumber("-4.25")).to.equal(-4.25);
  });

  it("TONUMBER-003: should trim whitespace from numeric strings", function () {
    expect(toNumber("  2.50  ")).to.equal(2.5);
    expect(toNumber("\t15\n")).to.equal(15);
  });

  it("TONUMBER-004: should convert binary and octal strings", function () {
    expect(toNumber("0b101")).to.equal(5);
    expect(toNumber("0o10")).to.equal(8);
  });

  it("TONUMBER-005: should return NaN for invalid numeric strings and bad hex", function () {
    expect(toNumber("abc")).to.be.NaN;
    expect(toNumber("3.50€")).to.be.NaN;
    expect(toNumber("-0x1a")).to.be.NaN;
  });

  it("TONUMBER-006: should handle booleans, null, and undefined", function () {
    expect(toNumber(true)).to.equal(1);
    expect(toNumber(false)).to.equal(0);
    expect(toNumber(null)).to.equal(0);
    expect(toNumber(undefined)).to.be.NaN;
  });

  it("TONUMBER-007: should return NaN for symbols", function () {
    expect(toNumber(Symbol("price"))).to.be.NaN;
  });

  it("TONUMBER-008: should convert objects with valueOf method", function () {
    const priceObj = { valueOf: () => 4.99 };
    expect(toNumber(priceObj)).to.equal(4.99);
    expect(toNumber({})).to.be.NaN;
  });

  it("TONUMBER-009: should convert empty string to 0", function () {
    expect(toNumber("")).to.equal(0);
    expect(toNumber("   ")).to.equal(0);
  });
});