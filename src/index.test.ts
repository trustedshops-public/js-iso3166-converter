import {
  convertIso2ToIso3,
  convertIso3ToIso2,
  detectedIsoFormat,
  convertIso,
} from ".";

const ISO2_GERMANY = "DE";
const ISO3_GERMANY = "DEU";
const INVALID_ISO = "ZZ";

describe("convertIso2ToIso3", () => {
  it("should convert ISO2 to ISO3", () => {
    expect(convertIso2ToIso3(ISO2_GERMANY)).toBe(ISO3_GERMANY);
  });
  it("should throw an error if the ISO2 code is invalid", () => {
    // @ts-ignore - we want to test invalid ISO2 codes
    expect(() => convertIso2ToIso3(INVALID_ISO)).toThrow();
  });
});

describe("convertIso3ToIso2", () => {
  it("should convert ISO3 to ISO2", () => {
    expect(convertIso3ToIso2(ISO3_GERMANY)).toBe(ISO2_GERMANY);
  });
  it("should throw an error if the ISO3 code is invalid", () => {
    // @ts-ignore - we want to test invalid ISO3 codes
    expect(() => convertIso3ToIso2(INVALID_ISO)).toThrow();
  });
});

describe("detectedIsoFormat", () => {
  it("should detect ISO2", () => {
    expect(detectedIsoFormat(ISO2_GERMANY)).toBe("ISO2");
  });
  it("should detect ISO3", () => {
    expect(detectedIsoFormat(ISO3_GERMANY)).toBe("ISO3");
  });
  it("should throw an error if the ISO code is invalid", () => {
    // @ts-ignore - we want to test invalid ISO codes
    expect(() => detectedIsoFormat(INVALID_ISO)).toThrow();
  });
});

describe("convertIso", () => {
  it("should convert ISO2 to ISO3", () => {
    expect(convertIso(ISO2_GERMANY)).toBe(ISO3_GERMANY);
  });
  it("should convert ISO3 to ISO2", () => {
    expect(convertIso(ISO3_GERMANY)).toBe(ISO2_GERMANY);
  });
  it("should throw an error if the ISO code is invalid", () => {
    // @ts-ignore - we want to test invalid ISO codes
    expect(() => convertIso(INVALID_ISO)).toThrow();
  });
});
