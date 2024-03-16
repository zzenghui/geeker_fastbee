<script setup lang="ts">
import { ref } from "vue";
let deviceName = ref<string>("");
let deviceCode = ref<string>("");
let deviceState = ref<string>("");
let myGroup = ref<string>("");
let current_page = ref<number>(1);
let page_size = ref<number>(10);
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
                  <el-option label="未激活" value="1"></el-option>
                  <el-option label="禁用" value="2"></el-option>
                  <el-option label="离线" value="3"></el-option>
                  <el-option label="在线" value="4"></el-option>
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
                <el-button type="primary" icon="Search">搜索</el-button>
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
        <el-col :span="24" :xl="6" :lg="8" :md="12" :sm="24" :xs="24" v-for="item in 10" :key="item">
          <el-card body-style="height:230px" style="margin-bottom: 20px; border-radius: 20px" shadow="hover">
            <div class="header_title">
              <div class="left_title">
                <el-icon> <Menu /> </el-icon>&nbsp;
                <h3>监控演示</h3>
              </div>
              <div class="right_title">
                <img src="@/assets/images/erweima.svg" alt="" style="width: 25px; height: 25px" />
                <img src="@/assets/images/wifi.svg" alt="" />
              </div>
            </div>
            <div class="main_body">
              <div class="left_body">
                <div class="line1">
                  <el-tag type="success">在线</el-tag>
                  <el-tag type="info">离线</el-tag>
                  <el-tag type="primary">KUHYT88</el-tag>
                </div>
                <div class="line2">
                  <div class="info">编号：15456489465456154654685</div>
                  <div class="info">产品：★视频监控产品</div>
                  <div class="info">激活时间：2024-01-1</div>
                </div>
              </div>
              <div class="right_body">
                <img src="./images/dev01.png" alt="" />
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
      <el-pagination
        v-model:current-page="current_page"
        v-model:page-size="page_size"
        :page-sizes="[10, 15, 20, 25]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </el-card>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
