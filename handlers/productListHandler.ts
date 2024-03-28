import productList from "../data/productList.json";
import { Handler } from "aws-lambda";

export const productListHandler: Handler = async () => {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        products: productList,
      }),
    };

    return response;
  } catch (error) {
    console.error(error);
  }
};
