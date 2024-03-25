<script setup lang="ts">
import commandStatistics from "./components/commandStatistics/index.vue";
import memoryInformation from "./components/memoryInformation/index.vue";
</script>

<template>
  <div>
    <!-- 信息栏 -->
    <el-card>
      <template #header> 基本信息 </template>
      <el-descriptions class="margin-top" :column="4" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">Redis版本</div>
          </template>
          7.0.0
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">运行模式</div>
          </template>
          单机
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">端口</div>
          </template>
          6379
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">客户端数</div>
          </template>
          2
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">运行时间（天）</div>
          </template>
          57
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">使用内存</div>
          </template>
          5.94M
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">使用CPU</div>
          </template>
          528.64
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">内存配置</div>
          </template>
          0B
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">AOF是否开启</div>
          </template>
          是
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">RDB是否成功</div>
          </template>
          ok
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">Key数量</div>
          </template>
          2661
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">网络入口/出口</div>
          </template>
          1.21kps/0.54kps
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <!-- 图表 -->
    <el-row :gutter="20" :justify="'space-between'">
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <el-card style="height: 450px">
          <template #header> 命令统计 </template>
          <commandStatistics></commandStatistics>
        </el-card>
      </el-col>
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <el-card style="height: 450px">
          <template #header> 内存信息 </template>
          <memoryInformation></memoryInformation>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
