<script setup lang="ts">
import { ref } from "vue";

let cateName = ref<string>("");
let myGroup = ref<boolean>(false);
let tableData = [
  {
    cateName: "通风组",
    sort: 1,
    createTime: "2023-03-12",
    User: "fastbee",
    Remarks: "两耳不闻窗外事"
  }
];
let current_page = ref<number>(1);
let page_size = ref<number>(10);

let addFormData = ref<any>({
  cateName: "",
  sort: 1,
  Remarks: ""
});
let dialogFormVisible = ref<boolean>(false);
//确认添加
function sureAdd() {
  addFormData.value.sort = parseInt(addFormData.value.sort);
  console.log(addFormData.value);
}
//dialog关闭时
function handleDialogClose() {
  addFormData.value = {
    cateName: "",
    sort: 1,
    Remarks: ""
  };
}
</script>

<template>
  <div>
    <!-- 搜索区域 -->
    <el-card>
      <div class="topOper">
        <div class="leftSearch">
          <el-row>
            <el-col :xl="5">
              <div class="deviceName selectItem">
                <span>分组名称</span>
                <el-input v-model="cateName" style="width: 150px" placeholder="请输入分组名称"></el-input>
              </div>
            </el-col>
            <el-col :xl="3">
              <div class="deviceName selectItem">
                <span>我的分组</span>
                <el-switch v-model="myGroup" />
              </div>
            </el-col>
            <el-col :xl="4">
              <div>
                <el-button type="primary" icon="Search">搜索</el-button>
                <el-button icon="refresh">重置</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="rightOperation">
          <el-button type="primary" icon="Plus" plain @click="dialogFormVisible = true">新增</el-button>
        </div>
      </div>
    </el-card>
    <!-- 主体区域 -->
    <el-card style="margin-top: 10px">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="分类名称" align="center" prop="cateName"></el-table-column>
        <el-table-column label="分组排序" prop="sort" align="center"></el-table-column>
        <el-table-column label="创建时间" prop="createTime" align="center"></el-table-column>
        <el-table-column label="所属用户" prop="User" align="center"></el-table-column>
        <el-table-column label="备注" prop="Remarks" align="center" width="500px"></el-table-column>
        <el-table-column label="操作" align="center" width="300px">
          <template #default="{ row }" align="center">
            <el-button type="warning" icon="Search">查看设备</el-button>
            <el-button type="primary" icon="Edit">添加设备</el-button>
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
    <!-- dialog对话框 -->
    <el-dialog v-model="dialogFormVisible" title="添加设备分组" width="700" @close="handleDialogClose">
      <el-form :model="addFormData" label-width="100px" style="margin-top: 20px">
        <el-form-item label="分组名称">
          <el-input v-model="addFormData.cateName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="分组排序">
          <el-input v-model="addFormData.sort" autocomplete="off" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="addFormData.Remarks" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="sureAdd"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
