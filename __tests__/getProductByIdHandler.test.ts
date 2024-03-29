import { Context } from "aws-lambda";

import { getProductById } from "../handlers/getProductByIdHandler";

describe("test productListHandler", () => {
  it("should find and return product by productId", async () => {
    const event = {
      pathParameters: {
        productId: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
      },
    };
    const context = {} as Context;
    const callback = jest.fn();
    const response = await getProductById(event, context, callback);
    const parsedResponse = JSON.parse(response);

    expect(parsedResponse.statusCode).toBe(200);
    expect(parsedResponse.product[0].id).toBe(event.pathParameters.productId);
  });

  it("should return 404 if product with event id haven'nt found", async () => {
    const event = {
      pathParameters: {
        productId: "",
      },
    };
    const context = {} as Context;
    const callback = jest.fn();
    const response = await getProductById(event, context, callback);

    const parsedResponse = JSON.parse(response);

    expect(parsedResponse.statusCode).toBe(404);
    expect(parsedResponse.message).toBe("Product not found");
  });
});
