import subTestidInit from "./subTestidInit";

describe("subTestidInit()", (): void => {
  it("should return a testid string with the sub test id separated by a '-'", (): void => {
    const testid = "TestId";
    const otherTestid = "Other";
    const subTestid = subTestidInit(testid);

    expect(subTestid(otherTestid)).toEqual(`${testid}-${otherTestid}`);
  });
});
