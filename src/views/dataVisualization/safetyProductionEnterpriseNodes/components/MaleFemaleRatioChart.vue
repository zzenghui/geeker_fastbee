<template>
  <!-- 男女比例 -->
  <div class="malefemaleRatio-main">
    <!-- echarts -->
    <div id="MaleFemaleRatioChart" class="echarts"></div>
  </div>
</template>

<script setup lang="ts">
import { ECharts, init, number } from "echarts";

const initChart = (dataArr: number[]): ECharts => {
  const charEle = document.getElementById("MaleFemaleRatioChart") as HTMLElement;
  const charEch: ECharts = init(charEle);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: true,
        textStyle: {
          color: "#fff",
        },
        lineStyle: {
          color: "#fff", //刻度线的颜色
        },
      },
    },
    yAxis: {
      type: 'category',
      data: ['保留消息', '路由数量', '订阅数量', '会话数量', '连接数量'],
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',
        },
      },
    },
    series: [
      {
        type: 'bar',
        data: [100, 200, 300, 400, 500],
        color: "#ff0"
      }
    ]
  };
  charEch.setOption(option);
  return charEch;
};
defineExpose({
  initChart
});
</script>
<style lang="scss" scoped>
.malefemaleRatio-main {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
