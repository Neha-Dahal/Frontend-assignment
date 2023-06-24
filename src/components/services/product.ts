import { get } from "./axios";

export const fetchProducts = async () => {
  const { data } = await get("products/getProducts");
  return data;
};
