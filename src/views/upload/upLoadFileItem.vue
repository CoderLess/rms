<!--
 * @Author: your name
 * @Date: 2020-09-07 10:39:47
 * @LastEditTime: 2020-09-07 11:14:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\views\upload\UpLoadFileItem.vue
-->
<template>

  <el-submenu v-if="data.children.length>0" :index="data.id+ ''">
    <template slot="title">
      <span>{{data.name}}</span>
    </template>
    <upload-file-item v-for= "item in data.children" :key="item.id" :data="item"></upload-file-item>
  </el-submenu>

  <el-menu-item v-else :index="data.id+ ''">{{data.name}}</el-menu-item>

</template>

<script>
export default {
  name: 'uploadFileItem',
  props: {
    data: {}
  }
}
</script>

<style>
</style>
