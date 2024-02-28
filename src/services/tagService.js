import { get } from "../utils/request";

export const getListTag = async () => {
  const result = await get(`tags.json`);
  console.log(result);
  return result;
};