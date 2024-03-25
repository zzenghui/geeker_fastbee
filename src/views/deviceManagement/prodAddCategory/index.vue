<script setup lang="ts">
import { ref } from "vue";
let formData = ref<any>({
  prodName: "",
  prodCate: 0, // 0 电灯  1 工业自动化  2 玩具
  deviceCate: 0, //0 直连设备    1 网关设备   2 监控设备
  transportProtocol: 0, //0 MQTT  1 TCP  2 UDP  3 GB28181
  protocolEncoding: 0, // 0 json   1 商业版本支持更多非标协议
  networkingMethods: 0,
  remark: "",
  authorization: false,
  authenticationMethod: 0, //0 简单认证  1加密认证  2简单+加密认证
  prodCode: 0,
  mqttAccount: "",
  mqttPassword: ""
});

//确认新增
function onSubmit() {
  //TODO 新增产品
}

//图片列表
let fileList = ref<any>([]);
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const handlePictureCardPreview: any = (uploadFile: any) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
</script>

<template>
  <el-card style="height: 100%">
    <div class="addProdCate">
      <div class="main">
        <div class="column">
          <div class="inp">
            <span>产品名称&emsp;</span>
            <el-input v-model="formData.prodName" placeholder="请输入产品名称" />
          </div>
          <div class="inp">
            <span>产品分类&emsp;</span>
            <el-select v-model="formData.prodCate">
              <el-option label="电灯" :value="0"></el-option>
              <el-option label="工业自动化" :value="1"></el-option>
              <el-option label="玩具" :value="2"></el-option>
            </el-select>
          </div>
          <div class="inp">
            <span>类型设备&emsp;</span>
            <el-select v-model="formData.deviceCate">
              <el-option label="直连设备" :value="0"></el-option>
              <el-option label="网关设备" :value="1"></el-option>
              <el-option label="监控设备" :value="2"></el-option>
            </el-select>
          </div>
          <div class="inp">
            <span>传输协议&emsp;</span>
            <el-select v-model="formData.transportProtocol">
              <el-option label="MQTT" :value="0"></el-option>
              <el-option label="TCP" :value="1"></el-option>
              <el-option label="UDP" :value="2"></el-option>
              <el-option label="GB28181" :value="2"></el-option>
            </el-select>
          </div>
          <div class="inp">
            <span>协议编码&emsp;</span>
            <el-select v-model="formData.protocolEncoding">
              <el-option label="JSON协议" :value="0"></el-option>
              <el-option label="商业版本支持更多非标协议" :value="1"></el-option>
            </el-select>
          </div>
          <div class="inp">
            <span>联网方式&emsp;</span>
            <el-select v-model="formData.networkingMethods">
              <el-option label="WIFI" :value="0"></el-option>
              <el-option label="蜂窝(2G/3G/4G/5G)" :value="1"></el-option>
              <el-option label="以太网" :value="2"></el-option>
              <el-option label="其他" :value="3"></el-option>
            </el-select>
          </div>
          <div class="inp">
            <span>备注信息&emsp;</span>
            <el-input v-model="formData.remark" placeholder="请输入内容" />
          </div>
        </div>

        <div class="column">
          <div class="inp">
            <span>启动授权&emsp;</span>
            <el-switch
              v-model="formData.authorization"
              class="ml-2"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            />
          </div>
          <div class="inp">
            <span>认证方式&emsp;</span>
            <el-select v-model="formData.authenticationMethod">
              <el-option label="简单认证" :value="0"></el-option>
              <el-option label="加密认证" :value="1"></el-option>
              <el-option label="简单+加密" :value="2"></el-option>
            </el-select>
          </div>
          <div class="inp">
            <span>产品编号&emsp;</span>
            <el-input v-model="formData.prodCode" disabled />
          </div>
          <div class="inp">
            <span>Mqtt账号&emsp;</span>
            <el-input v-model="formData.mqttAccount" placeholder="不填自动生成" />
          </div>
          <div class="inp">
            <span>Mqtt密码&emsp;</span>
            <el-input v-model="formData.mqttPassword" type="password" show-password placeholder="不填自动生成" />
          </div>
          <div class="inp">
            <span>产品密钥&emsp;</span>
            <el-input placeholder="自动生成" disabled />
          </div>
        </div>
        <div class="column">
          <div class="inp">
            <span>产品图片&emsp;</span>
            <el-upload
              v-model:file-list="fileList"
              action="#"
              :auto-upload="false"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :limit="1"
            >
              <el-icon>
                <Plus />
              </el-icon>
            </el-upload>

            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </div>
          <div class="uploadInfo">请上传 大小不超过 <span>1MB</span> 格式为 <span>png/jpg/jpeg</span> 的文件</div>
        </div>
      </div>
      <div class="submit">
        <el-button type="primary" @click="onSubmit">新增</el-button>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.el-input,
.el-select {
  width: 300px;
}

.submit {
  text-align: center;
  margin-top: 100px;
}

.main {
  display: flex;
  justify-content: space-between;

  .column {
    .inp {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      span {
        display: inline-block;
        text-align: right;
        font-size: 15px;
        width: 150px;
        font-weight: 600;
      }
    }

    &:nth-child(1),
    &:nth-child(2) {
      flex: 2;
    }

    &:nth-child(3) {
      flex: 1.5;

      .inp {
        align-items: start;
      }
    }

    .uploadInfo {
      font-size: 12px;
      text-align: center;

      span {
        color: red;
      }
    }
  }
}
</style>
