import { Main } from "./main";
import { customMatchers } from "./customMatchers";

describe("Main", () => {

    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    })

  it("should return hello", () => {
      let result = new Main().callMe();

      expect(result).toBe("hello");
  })

  it("should not return blubb", () => {
      let result = new Main().callMe();

      expect(result).not.toBe("blubb");
  })

  it("should always be true", () => {
      expect({}).alwaysTrue();
  })
});
