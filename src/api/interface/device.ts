//设备信息接口
export interface deviceInfo {
    title:string;
    state:number;
    tags:string[];
    code:string;
    productName:string;
    img:string;
    activationTime:string;
    qrCode:string;
}

//搜索设备请求参数
export interface searchDeviceParams {
    deviceName:string
    deviceCode:string
    deviceState:number
    myGroup:string
}