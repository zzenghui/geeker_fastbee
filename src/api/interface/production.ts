export interface productionInfo {
    id:string;
    title:string;
    cate:string;
    type:string;
    networkingMethods:string;
    isAuthorization:number;
    img:string;
    state:number
}


export interface searchProdParams {
    prodName:string
    cateName:string
    state:number
}