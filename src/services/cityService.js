import { get } from "../utils/request";

export const getListCity = async () => {
  const result = await get(`city.json`);
  console.log(result);
  return result;
};