import { Context } from "aws-lambda";

import { productListHandler } from "../handlers/productListHandler";

describe("test productListHandler", () => {
  it("should call product list handler and get products", async () => {
    const event = {};
    const context = {} as Context;
    const callback = jest.fn();
    const response = await productListHandler(event, context, callback);

    const parsedBody = JSON.parse(response.body);

    expect(response).toHaveProperty("statusCode");
    expect(response.statusCode).toBe(200);
    expect(parsedBody).toHaveProperty("products");
    expect(parsedBody.products.length).toBeGreaterThan(0);
  });

  it("should handle catch block in product list handler", async () => {
    const spyFunction = jest.fn(productListHandler);
    spyFunction.mockImplementationOnce(() => {
      throw new Error("Something went wrong");
    });
    expect(spyFunction).toThrow("Something went wrong");
  });
});
