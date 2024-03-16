import {productionInfo} from "@/api/interface/production"

export interface productionData {
    page:number;
    size:number;
    productionList:productionInfo[]
}