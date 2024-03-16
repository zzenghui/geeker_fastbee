<script setup lang="ts">
import { ref } from "vue";
let productName = ref<string>("");
let cateName = ref<string>("");
let state = ref<string>("");
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
                <span>产品名称</span>
                <el-input v-model="productName" style="width: 150px" placeholder="请输入设备名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="5" :lg="10">
              <div class="deviceCode selectItem">
                <span>分类名称</span>
                <el-input v-model="cateName" style="width: 150px" placeholder="请输入设备名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="5" :lg="10">
              <div class="deviceState selectItem">
                <span>设备状态</span>
                <el-select v-model="state" style="width: 150px" placeholder="请选择设备状态">
                  <el-option label="未激活" value="1"></el-option>
                  <el-option label="禁用" value="2"></el-option>
                  <el-option label="离线" value="3"></el-option>
                  <el-option label="在线" value="4"></el-option>
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
                <el-icon>
                  <Menu />
                </el-icon>&nbsp;
                <h3>⭐智能开关产品</h3>
                &nbsp;
                <el-tag type="info">系统</el-tag>
              </div>
              <div class="right_title">
                <el-tag type="success" v-if="item % 2 == 0">已发布</el-tag>
                <el-tag type="info" v-else>未发布</el-tag>
              </div>
            </div>
            <div class="main_body">
              <div class="left_body">
                <div class="line2">
                  <div class="Info">所属类型：<span>电工照明</span></div>
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
      <el-pagination v-model:current-page="current_page" v-model:page-size="page_size" :page-sizes="[10, 15, 20, 25]"
        :background="true" layout="total, sizes, prev, pager, next, jumper" :total="400" />
    </el-card>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
