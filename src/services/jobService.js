import { del, get, patch, post } from "../utils/request";

export const createJob = async (options) => {
  const result = await post(`jobs.json`, options);
  return result;
};

export const updateJob = async (id, options) => {
  const result = await patch(`jobs/${id-1}.json`, options);
  return result;
};

export const deleteJob = async (id) => {
  const result = await del(`jobs/${id-1}.json`);
  return result;
};

export const getListJob = async (id) => {
  const result = await get(`jobs.json?idCompany=${id}`);
  return result;
};

export const getDetailJob = async (id) => {
  const result = await get(`jobs/${id-1}.json`);
  return result;
};

export const getAllJob = async () => {
  const result = await get(`jobs.json`);
  return result;
};