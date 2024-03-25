import { deviceInfo } from "@/api/interface/device";
export interface deviceData {
  page: number;
  size: number;
  total: number;
  deviceList: deviceInfo[];
}
