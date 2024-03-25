<script setup lang="ts">
import { ref } from "vue";
import { tableData } from "./index.json";
let modelName = ref<string>("");
let modelCate = ref<number>(0);
console.log(tableData);

let current_page = ref<number>(1);
let page_size = ref<number>(10);

let dialogFormVisible = ref<boolean>(false);
let addFormData = ref<any>({
  templateId: null,
  templateName: null,
  userId: null,
  userName: null,
  tenantId: null,
  tenantName: null,
  identifier: null,
  type: 1,
  datatype: "integer",
  isSys: null,
  isTop: null,
  isMonitor: null,
  delFlag: null,
  createBy: null,
  createTime: null,
  updateBy: null,
  updateTime: null,
  remark: null,
  specs: {
    enumList: [
      {
        value: "",
        text: ""
      }
    ],
    arrayType: "int"
  }
});
//新增时打开dialog对话框
function addItem() {
  dialogFormVisible.value = true;
}
//关闭时的dialog
function handleDialogClose() {
  addFormData.value = {
    templateId: null,
    templateName: null,
    userId: null,
    userName: null,
    tenantId: null,
    tenantName: null,
    identifier: null,
    type: 1,
    datatype: "integer",
    isSys: null,
    isTop: null,
    isMonitor: null,
    delFlag: null,
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    specs: {
      enumList: [
        {
          value: "",
          text: ""
        }
      ],
      arrayType: "int"
    }
  };
}

let activeName = ref<number>(0);
const handleClick = (tab: any) => {
  addFormData.value.physicalCate = tab.index;
};

// 确认添加
function sureAdd() {
  addFormData.value.min = parseInt(addFormData.value.min);
  addFormData.value.max = parseInt(addFormData.value.min);
  addFormData.value.sort = parseInt(addFormData.value.sort);
  addFormData.value.step = parseInt(addFormData.value.step);
  console.log(addFormData.value);
  //TODO发送请求 存在id时修改  不存在id时添加
}

//修改时
function updateRow(row: any) {
  addFormData.value = { ...row };
  dialogFormVisible.value = true;
}

/** 格式化显示数据定义 */
function formatSpecsDisplay(json: any) {
  let specs = JSON.parse(json);
  if (specs.type === "integer" || specs.type === "decimal") {
    return (
      "<span style='width:50%;display:inline-block;'>最大值：<span style=\"color:#F56C6C\">" +
      specs.max +
      '</span></span>最小值：<span style="color:#F56C6C">' +
      specs.min +
      "</span><br /><span style='width:50%;display:inline-block;'>步长：<span style=\"color:#F56C6C\">" +
      specs.step +
      '</span></span>单位：<span style="color:#F56C6C">' +
      specs.unit
    );
  } else if (specs.type === "string") {
    return '最大长度：<span style="color:#F56C6C">' + specs.maxLength + "</span>";
  } else if (specs.type === "array") {
    return '数组类型：<span style="color:#F56C6C">' + specs.arrayType + "</span>";
  } else if (specs.type === "enum") {
    let items = "";
    for (let i = 0; i < specs.enumList.length; i++) {
      items =
        items +
        "<span style='width:50%;display:inline-block;'>" +
        specs.enumList[i].value +
        "：<span style='color:#F56C6C'>" +
        specs.enumList[i].text +
        "</span></span>";
      if (i > 0 && i % 2 != 0) {
        items = items + "<br />";
      }
    }
    return items;
  } else if (specs.type === "bool") {
    return (
      "<span style='width:50%;display:inline-block;'>0：<span style=\"color:#F56C6C\">" +
      specs.falseText +
      '</span></span>1：<span style="color:#F56C6C">' +
      specs.trueText
    );
  }
}
</script>

<template>
  <div>
    <!-- 搜索区域 -->
    <el-card>
      <div class="topOper">
        <div class="leftSearch">
          <el-row>
            <el-col :xl="9" :lg="10">
              <div class="deviceName selectItem">
                <span>模型名称</span>
                <el-input v-model="modelName" style="width: 200px" placeholder="请输入模型名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="9" :lg="10">
              <div class="deviceCode selectItem">
                <span>模型类别</span>
                <el-select v-model="modelCate" style="width: 200px">
                  <el-option label="属性" :value="0"></el-option>
                  <el-option label="功能" :value="1"></el-option>
                  <el-option label="事件" :value="2"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :xl="6" :lg="10">
              <div>
                <el-button type="primary" icon="Search">搜索</el-button>
                <el-button icon="refresh">重置</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="rightOperation">
          <el-button type="primary" icon="Plus" plain @click="addItem">新增</el-button>
        </div>
      </div>
    </el-card>
    <!-- 主体区域 -->
    <el-card style="margin-top: 10px">
      <el-table border style="width: 100%" :data="tableData as any">
        <el-table-column prop="templateName" label="模型名称" align="center"></el-table-column>
        <el-table-column prop="identifier" label="标识符" align="center"></el-table-column>
        <el-table-column align="center" label="首页显示">
          <template #default="{ row }">
            <div>{{ row.isTop == 1 ? "是" : "否" }}</div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="检测值">
          <template #default="{ row }">
            <div>{{ row.isMonitor == 1 ? "是" : "否" }}</div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="系统定义">
          <template #default="{ row }">
            <div>{{ row.isSys == 1 ? "是" : "否" }}</div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="物理性类别">
          <template #default="{ row }">
            <el-tag type="primary" v-if="row.type == 0">属性</el-tag>
            <el-tag type="warning" v-else-if="row.type == 1">事件</el-tag>
            <el-tag type="success" v-else>功能</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="数据类型" prop="datatype" align="center"></el-table-column>
        <el-table-column label="数据定义" width="200px" align="center">
          <template #default="{ row }">
            <div v-html="formatSpecsDisplay(row.specs)"></div>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="createTime" align="center" width="250px"></el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="{ row }">
            <el-button type="primary" icon="Edit" @click="updateRow(row)">修改</el-button>
          </template>
        </el-table-column>
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
    <!-- dialog区域 -->
    <el-dialog v-model="dialogFormVisible" title="通用物模型" width="700" @close="handleDialogClose">
      <el-form :model="addFormData" style="margin-top: 20px" label-width="100px">
        <el-form-item label="模型名称">
          <el-input v-model="addFormData.templateName" autocomplete="off" placeholder="请输入模型名称 例如:温度" />
        </el-form-item>
        <el-form-item label="模型标识">
          <el-input v-model="addFormData.identifier" placeholder="请输入标识符 例如:temperature" />
        </el-form-item>
        <el-form-item label="模型排序">
          <el-input v-model="addFormData.sort" type="number" />
        </el-form-item>
        <el-form-item label="模型类别">
          <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="属性" :name="0">
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.isPicture" label="图片展示" size="large" />
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.detection" label="实时监测" size="large" />
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.readonly" label="只读数据" size="large" />
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.history" label="历史存储" size="large" />
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.system" label="分享权限" size="large" />
            </el-tab-pane>
            <el-tab-pane label="功能" :name="1">
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.readonly" label="只读数据" size="large" />
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.history" label="历史存储" size="large" />
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.system" label="分享权限" size="large" />
            </el-tab-pane>
            <el-tab-pane label="事件" :name="2">
              <el-checkbox
                :true-value="1"
                :false-value="0"
                v-model="addFormData.readonly"
                label="只读数据"
                size="large"
                disabled
              />
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.history" label="历史存储" size="large" />
              <el-checkbox :true-value="1" :false-value="0" v-model="addFormData.system" label="分享权限" size="large" />
            </el-tab-pane>
          </el-tabs>
        </el-form-item>
        <el-divider />
        <el-form-item label="数据类型">
          <el-select v-model="addFormData.dataType">
            <el-option labe="整数" value="整数"></el-option>
            <el-option labe="小数" value="小数"></el-option>
            <el-option labe="布尔" value="布尔"></el-option>
            <el-option labe="枚举" value="枚举"></el-option>
            <el-option labe="字符串" value="字符串"></el-option>
            <el-option labe="数组" value="数组"></el-option>
            <el-option labe="对象" value="对象"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="取值范围">
          <el-input v-model="addFormData.min" type="number" placeholder="最小值" style="width: 100px" />
          &nbsp; 到 &nbsp;
          <el-input v-model="addFormData.max" type="number" placeholder="最大值" style="width: 100px" />
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="addFormData.unit" placeholder="请输入单位  例如:cm" />
        </el-form-item>
        <el-form-item label="步长">
          <el-input v-model="addFormData.step" placeholder="请输入步长  例如:1" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="sureAdd"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
