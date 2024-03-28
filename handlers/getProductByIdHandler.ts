import productList from "../data/productList.json";
import { Handler } from "aws-lambda";
import _ from "underscore";

export const getProductById: Handler = async (event) => {
  try {
    const pathId = event.pathParameters.productId;
    const foundProduct = await _.where(productList, { id: pathId });
    const response = JSON.stringify(
      foundProduct.length > 0
        ? {
            product: foundProduct,
            statusCode: 200,
          }
        : {
            message: "Product not found",
            statusCode: 404,
          }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
