// import http from "@/api";
import productionList from "@/assets/json/production.json";
import searchProdList from "@/assets/json/searchProd.json";
import { searchProdParams } from "../interface/production";
export const getProduction = (pageNum: number, pageSize: number) => {
  return productionList;
};

//搜索产品列表
export const searchProdApi = (params: searchProdParams) => {
  return searchProdList;
};
