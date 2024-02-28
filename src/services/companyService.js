import { get, patch, post } from "../utils/request";

export const login = async (email, password = "") => {
  let pass = "";
  if (password !== "") {
    pass = `&password=${password}`;
  }
  const result = await get(`company.json?email=${email}${pass}`);
  console.log(result);
  return result;
};

export const checkExist = async (type, value) => {
  const result = await get(`company.json?${type}=${value}`);
  return result;
};

export const createCompany = async (options) => {
  const result = await post(`company.json`, options);
  console.log(result);
  return result;
};

export const getDetailCompany = async (id) => {
  const result = await get(`company/${id-1}.json`);
  console.log(result);
  return result;
};

export const editCompany = async (id, options) => {
  const result = await patch(`company/${id-1}.json`, options);
  console.log(result);
  return result;
};

export const getAllCompany = async () => {
  const result = await get(`company.json`);
  console.log(result);
  return result;
};