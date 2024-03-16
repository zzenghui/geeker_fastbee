import {defineStore} from "pinia"
import { reactive } from "vue"
import { productionData } from "../interface/production"
import { getProduction } from "@/api/modules/production"
export const useProduction = defineStore("production",()=>{
    const productiondata = reactive<productionData>({
        page:1,
        size:10,
        productionList:[]
    })
    //获取产品列表
    async function getProductionAct(){
        let res = await getProduction(productiondata.page,productiondata.size)
        console.log(res);
        
        if (res.code == 200) {
            productiondata.productionList = res.data
        }

    }
    return {productiondata,getProductionAct}
})