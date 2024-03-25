<script setup lang="ts">
import { ref } from "vue";

let protoName = ref<string>("");
let protoCode = ref<string>("");

let tableData = [
  {
    protoName: "JSON协议",
    protoCode: "JSON",
    uploadAddress: "/",
    protoCate: "0",
    protoAbstract: "系统内置JSON编解码协议"
  }
];

let current_page = ref<number>(1);
let page_size = ref<number>(10);
</script>

<template>
  <div>
    <!-- 搜索区域 -->
    <el-card>
      <div class="topOper">
        <div class="leftSearch">
          <el-row>
            <el-col :xl="5" :lg="10">
              <div class="deviceName selectItem">
                <span>协议名称</span>
                <el-input v-model="protoName" style="width: 150px" placeholder="请输入协议名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="5" :lg="10">
              <div class="deviceCode selectItem">
                <span>协议编码</span>
                <el-input v-model="protoCode" style="width: 150px" placeholder="请输入协议编码"></el-input>
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
        </div>
      </div>
    </el-card>
    <!-- 主题区域 -->
    <el-card style="margin-top: 10px">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="协议名称" prop="protoName" align="center"></el-table-column>
        <el-table-column label="协议编码" prop="protoCode" align="center"></el-table-column>
        <el-table-column label="上传地址" prop="uploadAddress" align="center"></el-table-column>
        <el-table-column label="协议类型" prop="protoCate" align="center"></el-table-column>
        <el-table-column label="协议摘要" prop="protoAbstract" align="center"></el-table-column>
      </el-table>
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
