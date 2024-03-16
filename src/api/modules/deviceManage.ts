// import http from "@/api";
import deviceList from "@/assets/json/device.json"
//获取分页设备
export const getDevice = (pageNum:number,pageSize:number) => {
    return deviceList
}