<script setup lang="ts">
import { ref } from "vue";
import { useProduction } from "@/stores/modules/production";
import { getPicture } from "@/utils/getRandom";
import { useRouter } from "vue-router";
let current_page = ref<number>(1);
let page_size = ref<number>(10);
const prodStore = useProduction();
//获取产品数据
prodStore.getProductionAct();

//----------------------------------搜索设备start
let prodName = ref<string>("");
let cateName = ref<string>("");
let state = ref<number>(0);
function searchProd() {
  let searchParams = {
    prodName: prodName.value,
    cateName: cateName.value,
    state: state.value
  };
  prodStore.searchProd(searchParams);
}
//----------------------------------搜索设备end
const router = useRouter();
function goAddProd() {
  router.push({
    path: "/deviceManagement/productManagement-add"
  });
}
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
                <el-input v-model="prodName" style="width: 150px" placeholder="请输入产品名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="5" :lg="10">
              <div class="deviceCode selectItem">
                <span>分类名称</span>
                <el-input v-model="cateName" style="width: 150px" placeholder="请输入产品分类名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="5" :lg="10">
              <div class="deviceState selectItem">
                <span>产品状态</span>
                <el-select v-model="state" style="width: 150px" placeholder="请选择设备状态">
                  <el-option label="发布" :value="1"></el-option>
                  <el-option label="未发布" :value="0"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :xl="4" :lg="10">
              <div>
                <el-button type="primary" icon="Search" @click="searchProd">搜索</el-button>
                <el-button icon="refresh">重置</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="rightOperation">
          <el-button type="primary" icon="Plus" plain @click="goAddProd">新增</el-button>
        </div>
      </div>
    </el-card>
    <!-- 主体区域 -->
    <el-card style="margin-top: 10px">
      <el-row :gutter="20">
        <el-col
          :span="24"
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
          v-for="(item, index) in prodStore.productiondata.productionList"
          :key="item.id"
        >
          <el-card body-style="height:230px" style="margin-bottom: 20px; border-radius: 20px" shadow="hover">
            <div class="header_title">
              <div class="left_title">
                <el-icon>
                  <Menu /> </el-icon
                >&nbsp;
                <h3>{{ item.title }}</h3>
                &nbsp;
                <el-tag type="info">系统</el-tag>
              </div>
              <div class="right_title">
                <el-tag type="success" v-if="item.state == 1">已发布</el-tag>
                <el-tag type="info" v-else>未发布</el-tag>
              </div>
            </div>
            <div class="main_body">
              <div class="left_body">
                <div class="line2">
                  <div class="Info">
                    所属分类：<span style="color: cornflowerblue">{{ item.cate }}</span>
                  </div>
                  <div class="info">产品类型：{{ item.type }}</div>
                  <div class="info">联网方式：{{ item.networkingMethods }}</div>
                  <div class="info">
                    设备授权：
                    <el-tag type="success" v-if="item.isAuthorization == 1">已启用</el-tag>
                    <el-tag type="info" v-else>未启用</el-tag>
                  </div>
                </div>
              </div>
              <div class="right_body">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="getPicture(index % 4)"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="[getPicture(index % 4)]"
                  :initial-index="4"
                  fit="cover"
                />
              </div>
            </div>
            <div class="footer_operation">
              <el-button type="primary" icon="View">详情</el-button>
              <el-button type="success" icon="Odometer">查看设备</el-button>
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
