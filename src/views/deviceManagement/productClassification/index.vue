<script setup lang="ts">
import { ref } from "vue";
let cateName = ref<string>("");
let tableData = [
  {
    cateName: "电灯",
    Remarks: "爱迪生",
    system: "1", //0 否  1 是
    sort: 1,
    createTime: "2024-03-12"
  }
];
let current_page = ref<number>(1);
let page_size = ref<number>(10);

let dialogFormVisible = ref<boolean>(false);
let addFormData = ref<any>({
  cateName: "",
  sort: 0,
  Remarks: ""
});

//确认添加
function sureAdd() {
  addFormData.value.sort = parseInt(addFormData.value.sort);
  console.log(addFormData.value);
  //TODO 调用确认添加接口  id存在时添加   id不存在时修改
}

//点击修改按钮时
function updateRow(row: any) {
  addFormData.value = { ...row };
  dialogFormVisible.value = true;
}
//dialog关闭时
function handleDialogClose() {
  addFormData.value = {
    ateName: "",
    sort: 0,
    Remarks: ""
  };
}
</script>

<template>
  <div>
    <!-- 头部搜索 -->
    <el-card>
      <div class="topOper">
        <div class="leftSearch">
          <div class="selectItem">
            <span>分类名称</span>
            <el-input v-model="cateName" style="width: 250px" placeholder="请输入产品分类名称"></el-input>
          </div>
          <div style="margin-left: 20px">
            <el-button type="primary" icon="Search">搜索</el-button>
            <el-button icon="refresh">重置</el-button>
          </div>
        </div>
        <div class="rightOperation">
          <el-button type="primary" icon="Plus" plain @click="dialogFormVisible = true">新增</el-button>
        </div>
      </div>
    </el-card>
    <!-- 主题区域 -->
    <el-card style="margin-top: 10px">
      <el-table border style="width: 100%" :data="tableData">
        <el-table-column label="产品分类名称" prop="cateName" align="center"></el-table-column>
        <el-table-column label="备注" prop="Remarks" align="center"></el-table-column>
        <el-table-column label="系统定义" align="center">
          <template #default="{ row }">
            {{ row.system == 1 ? "是" : "否" }}
          </template>
        </el-table-column>
        <el-table-column label="显示顺序" prop="sort" align="center"></el-table-column>
        <el-table-column label="创建时间" prop="createTime" align="center"></el-table-column>
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
    <!-- 添加和修改时的dialog -->
    <el-dialog v-model="dialogFormVisible" title="产品分类" width="700" @close="handleDialogClose">
      <el-form :model="addFormData" style="margin-top: 20px" label-width="100px">
        <el-form-item label="分类名称">
          <el-input v-model="addFormData.cateName" autocomplete="off" placeholder="请输入产品分类名称" />
        </el-form-item>
        <el-form-item label="显示顺序">
          <el-input v-model="addFormData.sort" type="number" autocomplete="off" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="addFormData.Remarks" autocomplete="off" placeholder="请输入内容" />
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
