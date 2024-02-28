import { del, get, patch, post } from "../utils/request";

export const getListCV = async (id) => {
  const result = await get(`cv.json?idCompany=${id}`);
  return result;
};

export const getDetailCV = async (id) => {
  const result = await get(`cv/${id-1}.json`);
  return result;
};

export const changeStatusCV = async (id, options) => {
  const result = await patch(`cv/${id-1}`, options);
  return result;
};

export const deleteCV = async (id) => {
  const result = await del(`cv/${id-1}`);
  return result;
};

export const createCV = async (options) => {
  const result = await post(`cv.json`, options);
  return result;
};