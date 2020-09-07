<!--
 * @Author: your name
 * @Date: 2020-09-05 07:45:30
 * @LastEditTime: 2020-09-07 13:37:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\views\rms\html.vue
-->
<template>
  <div class="rms-html-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <upload-file-item v-for="data in cataLogList" :key="data.id" :data="data" />
        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-upload
          class="upload-file"
          drag
          action="http://localhost:8080/fileData/upload"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { cataLogList } from '@/api/catalog.js'
import UploadFileItem from './upLoadFileItem'
export default {
  data () {
    return {
      cataLogList: [],
      cataLogId: 0
    }
  },
  components: { UploadFileItem },
  created () {
    cataLogList().then(response => {
      this.cataLogList = response.data
    })
  },
  methods: {
    handleSelect (key) {
      this.cataLogId = key
      console.log(key)
    }
  }
}
</script>

<style>
.rms-html-container {
  width: 100%;
  height: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
