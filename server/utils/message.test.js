const expect = require("expect");

const { generateMessage } = require("./message");

describe("generateMessage", () => {
  it("Should generate the correct message object", () => {
    const returnObject = generateMessage("Ahmed", "Hello From test");

    expect(returnObject.from).toBe("Ahmed");
    expect(returnObject.text).toBe("Hello From test");
    expect(typeof returnObject.createdAt).toBe("number");
  });
});
