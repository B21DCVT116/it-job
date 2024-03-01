import { del, get, patch, post } from "../utils/request";

export const createJob = async (options) => {
  const result = await post(`jobs.json`, options);
  return result;
};

export const updateJob = async (id, options) => {
  const result = await patch(`jobs.json?orderBy="id"&equalTo="${id}"&print=pretty`, options);
  return result;
};

export const deleteJob = async (id) => {
  const result = await del(`jobs.json?orderBy="id"&equalTo="${id}"&print=pretty`);
  return result;
};

export const getListJob = async (id) => {
  const result = await get(`jobs.json?orderBy="idCompany"&equalTo="${id}"&print=pretty`);
  return result;
};

export const getDetailJob = async (id) => {
  const result = await get(`jobs.json?orderBy="id"&equalTo="${id}"&print=pretty`);
  return result;
};

export const getAllJob = async () => {
  const result = await get(`jobs.json`);
  return result;
};