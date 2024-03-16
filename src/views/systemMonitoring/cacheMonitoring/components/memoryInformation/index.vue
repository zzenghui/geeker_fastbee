<script setup lang='ts'>
import { onMounted } from 'vue';
import * as echarts from "echarts";
onMounted(() => {
    let ML = document.querySelector(".ML");
    var myChart = echarts.init(ML as HTMLDivElement)
    var option;
    option = {
        title: {
            text: "内存使用情况",
            top: '4%',
            x: 'center',
            textStyle: {
                color: "#808080",
                fontSize: 24,
                fontWeight: "normal",

            }
        },
        series: [
            {
                type: 'gauge',
                min: 0,
                max: 1000,
                axisLine: {
                    lineStyle: {
                        width: 20,
                        color: [
                            [0.3, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                    }
                },
                pointer: {
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    distance: -30,
                    length: 8,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: -30,
                    length: 30,
                    lineStyle: {
                        color: '#fff',
                        width: 4
                    }
                },
                axisLabel: {
                    color: 'inherit',
                    distance: 40,
                    fontSize: 15
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value} M',
                    color: 'inherit'
                },
                data: [
                    {
                        value: 70
                    }
                ]
            }
        ]
    };
    option && myChart.setOption(option);

})
</script>

<template>
    <div class="ML"></div>
</template>

<style scoped lang="scss">
.ML {
    width: 100%;
    height: 400px;
}
</style>