import { defineStore } from "pinia";
import { reactive } from "vue";
import { productionData } from "../interface/production";
import { getProduction, searchProdApi } from "@/api/modules/production";
import { searchProdParams } from "@/api/interface/production";
export const useProduction = defineStore("production", () => {
  const productiondata = reactive<productionData>({
    page: 1,
    size: 10,
    productionList: []
  });
  //获取产品列表
  async function getProductionAct() {
    let res = await getProduction(productiondata.page, productiondata.size);
    if (res.code == 200) {
      productiondata.productionList = res.data;
    }
  }
  //搜索列表
  async function searchProd(params: searchProdParams) {
    let res = await searchProdApi(params);
    if (res.code == 200) {
      productiondata.productionList = res.data;
    }
  }
  return { productiondata, getProductionAct, searchProd };
});
