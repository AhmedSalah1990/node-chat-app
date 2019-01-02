const expect = require("expect");

const { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("Should generate the correct message object", () => {
    const from = "Ahmed";
    const text = "Hello From test";
    const returnObject = generateMessage(from, text);

    expect(typeof returnObject.createdAt).toBe("number");
    expect(returnObject).toMatchObject({ from, text });
  });
});

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    const from = "User";
    const latitude = 1;
    const longitude = 1;
    const locationObject = generateLocationMessage(from, latitude, longitude);

    expect(typeof locationObject.createdAt).toBe("number");
    expect(locationObject).toMatchObject({
      from,
      url: "https://www.google.com/maps?q=1,1"
    });
  });
});
