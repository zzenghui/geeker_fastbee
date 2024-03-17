// import http from "@/api";
import deviceList from "@/assets/json/device.json"
import searchDevice from "@/assets/json/searchDevice.json"
import {searchDeviceParams} from "../interface/device"

//获取分页设备
export const getDevice = (pageNum:number,pageSize:number) => {
    return deviceList
}

//搜索设备
export const searchDeviceApi = (params:searchDeviceParams) => {
    return searchDevice
}