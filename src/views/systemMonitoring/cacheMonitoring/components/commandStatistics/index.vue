<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from "echarts";
onMounted(() => {
  let MT = document.querySelector(".MT");
  var myChart = echarts.init(MT as HTMLDivElement);
  var option;
  option = {
    title: {
      text: "命令统计",
      x: "center",
      textStyle: {
        color: "#808080",
        fontSize: 24,
        fontWeight: "normal"
      }
    },
    tooltip: {
      trigger: "item"
    },
    backgroundColor: "#fff",
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "70%",
        center: ["50%", "50%"],
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },

          { value: 1048, name: "Search Engine1" },
          { value: 735, name: "Direct2" },
          { value: 580, name: "Email3" },
          { value: 484, name: "Union Ads4" },
          { value: 300, name: "Video Ads5" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
  option && myChart.setOption(option);
});
</script>

<template>
  <div class="MT"></div>
</template>

<style scoped lang="scss">
.MT {
  width: 100%;
  height: 400px;
}
</style>
