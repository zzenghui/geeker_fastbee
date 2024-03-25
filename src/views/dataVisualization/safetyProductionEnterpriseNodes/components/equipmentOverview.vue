<template>
  <!-- 设备总览 -->
  <div id="equipmentOverview" class="echarts"></div>
</template>

<script setup lang="ts">
import { ECharts, init } from "echarts";
import "echarts-liquidfill";
const initChart = (Sdata: any): ECharts => {
  const charEle = document.getElementById("equipmentOverview") as HTMLElement;
  const charEch: ECharts = init(charEle);
  var colors = [
    ["rgba(20,146,255)", "rgba(20,146,255)"],
    ["rgba(89,170,245,0.85)", "rgba(89,170,245)"],
    ["rgba(21,190,79,0.85)", "rgba(21,190,79)"],
    ["rgba(252,92,92,0.85)", "rgba(252,92,92)"]
  ];
  var rich = {
    total: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold"
    },
    active: {
      fontSize: 14,
      color: "#fff",
      lineHeight: 30
    }
  };
  var count = 12;
  var seriesArr: any = [];
  Sdata.forEach(function (item: any, index: number) {
    seriesArr.push({
      name: item.name,
      type: "pie",
      clockWise: false,
      radius: [45, 50],
      itemStyle: {
        normal: {
          color: colors[index][0],
          shadowColor: colors[index][0],
          shadowBlur: 0,
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: true,
      center: [index > 1 ? (index - 2) * 50 + 25 + "%" : index * 50 + 25 + "%", index > 1 ? "75%" : "25%"],
      data: [
        {
          value: item.value,
          name: item.name,
          label: {
            normal: {
              formatter: function (params: any) {
                var name = params.name;
                var value = params.value;
                return "\n{total|" + value + "}{active|项}\n\r{active|" + name + "}";
              },
              rich: rich,
              position: "center",
              show: true
            }
          }
        },
        {
          value: count - item.value,
          name: "invisible",
          itemStyle: {
            normal: {
              color: colors[index][1]
            },
            emphasis: {
              color: colors[index][1]
            }
          }
        }
      ]
    });
  });

  const option = {
    title: { show: false },
    legend: { show: false },
    series: seriesArr
  };

  charEch.setOption(option);
  return charEch;
};
defineExpose({
  initChart
});
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: calc(100% - 50px);
}

.actual-total {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  margin-top: 10px;
  margin-right: 4px;

  .actual-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 50px;
    margin-right: 1px;
    font-family: MetroDF;
    font-size: 32px;
    color: #66ffff;
    background: url("../images/total.png") no-repeat;
    background-size: 100% 100%;

    &:last-child {
      margin-right: 0;
      font-size: 22px;
    }
  }

  .expect-total {
    position: absolute;
    top: -30px;
    right: 5px;
    font-size: 14px;
    color: #ffffff;

    i {
      font-style: normal;
      font-style: oblique;
      color: #ff8100;
    }
  }
}
</style>
