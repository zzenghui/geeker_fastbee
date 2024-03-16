import {defineStore} from "pinia"
import { getDevice } from "@/api/modules/deviceManage"
import { reactive } from "vue"
import { deviceData } from "../interface/device"
export const useDeviceStore = defineStore("device",()=>{
    let deviceData = reactive<deviceData>({
        page:1,
        size:10,
        total:1000,
        deviceList:[]
    })
    //获取设备的数据
    async function getDeviceList(){
        let res = await getDevice(deviceData.page,deviceData.size)
        if (res.code == 200) {
            (deviceData as any).deviceList = res.data
        }
    }
    return {
        deviceData,
        getDeviceList
    }
})