<script setup lang="ts">
import { useDeviceStore } from "@/stores/modules/device"
import { getPicture } from "@/utils/getRandom"
import { ref } from "vue";
let current_page = ref<number>(1);
let page_size = ref<number>(10);
//结构device仓库
const deviceStore = useDeviceStore()
//获取全部设备
deviceStore.getDeviceList()


//------------------------------------------------搜索设备start
let deviceName = ref<string>("");
let deviceCode = ref<string>("");
let deviceState = ref<number>(0);
let myGroup = ref<string>("");
function searchDevice() {
  let reqParams = {
    deviceName: deviceName.value,
    deviceCode: deviceCode.value,
    deviceState: deviceState.value,
    myGroup: myGroup.value
  }
  console.log(reqParams);

  deviceStore.searchDevice(reqParams)
}
//------------------------------------------------搜索设备end


</script>

<template>
  <div>
    <!-- 搜索框区域 -->
    <el-card>
      <div class="topOper">
        <div class="leftSearch">
          <el-row>
            <el-col :xl="5" :lg="10">
              <div class="deviceName selectItem">
                <span>设备名称</span>
                <el-input v-model="deviceName" style="width: 150px" placeholder="请输入设备名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="5" :lg="10">
              <div class="deviceCode selectItem">
                <span>设备编号</span>
                <el-input v-model="deviceCode" style="width: 150px" placeholder="请输入设备名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="5" :lg="10">
              <div class="deviceState selectItem">
                <span>设备状态</span>
                <el-select v-model="deviceState" style="width: 150px" placeholder="请选择设备状态">
                  <el-option label="未激活" :value="2"></el-option>
                  <el-option label="禁用" :value="3"></el-option>
                  <el-option label="离线" :value="0"></el-option>
                  <el-option label="在线" :value="1"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :xl="5" :lg="10">
              <div class="myGroup selectItem">
                <span>我的分组</span>
                <el-select v-model="myGroup" style="width: 150px" placeholder="请选择我的分组">
                  <el-option label="分组1" value="1"></el-option>
                  <el-option label="分组2" value="2"></el-option>
                  <el-option label="分组3" value="3"></el-option>
                  <el-option label="分组4" value="4"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :xl="4" :lg="10">
              <div>
                <el-button type="primary" icon="Search" @click="searchDevice">搜索</el-button>
                <el-button icon="refresh">重置</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="rightOperation">
          <el-button type="primary" icon="Plus" plain>新增</el-button>
          <el-button type="primary" icon="Operation" plain>切换</el-button>
        </div>
      </div>
    </el-card>
    <!-- 主体区域 -->
    <el-card style="margin-top: 10px">
      <el-row :gutter="20">
        <el-col :span="24" :xl="6" :lg="8" :md="12" :sm="24" :xs="24"
          v-for="(item, index) in deviceStore.deviceData.deviceList" :key="item.code">
          <el-card body-style="height:230px" style="margin-bottom: 20px; border-radius: 20px" shadow="hover">
            <div class="header_title">
              <div class="left_title">
                <el-icon>
                  <Menu />
                </el-icon>&nbsp;
                <h3>{{ item.title }}</h3>
              </div>
              <div class="right_title">
                <img src="@/assets/images/erweima.svg" alt="" style="width: 25px; height: 25px" />
                <img src="@/assets/images/wifi_active.svg" alt="" v-if="item.state == 1" />
                <img src="@/assets/images/wifi.svg" alt="" v-else />
              </div>
            </div>
            <div class="main_body">
              <div class="left_body">
                <div class="line1">
                  <el-tag type="success" v-if="item.state == 1">在线</el-tag>
                  <el-tag type="info" v-else-if="item.state == 0">离线</el-tag>
                  <el-tag type="info" v-else>未激活</el-tag>
                  <el-tag type="primary" v-for="item2 in item.tags" :key="item2">{{ item2 }}</el-tag>
                </div>
                <div class="line2">
                  <div class="info">编号：{{ item.code }}</div>
                  <div class="info">产品：{{ item.productName }}</div>
                  <div class="info">激活时间：{{ item.activationTime }}</div>
                </div>
              </div>
              <div class="right_body">
                <el-image style="width: 100px; height: 100px" :src="getPicture(index % 4)" :zoom-rate="1.2" :max-scale="7"
                  :min-scale="0.2" :preview-src-list="[getPicture(index % 4)]" :initial-index="4" fit="cover" />
              </div>
            </div>
            <div class="footer_operation">
              <el-button type="primary" icon="View">查看</el-button>
              <el-button type="success" icon="Odometer">运行状态</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 分页区域 -->
      <el-pagination v-model:current-page="current_page" v-model:page-size="page_size" :page-sizes="[10, 15, 20, 25]"
        :background="true" layout="total, sizes, prev, pager, next, jumper" :total="deviceStore.deviceData.total" />
    </el-card>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
