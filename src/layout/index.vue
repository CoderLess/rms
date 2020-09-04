<!--
 * @Author: your name
 * @Date: 2020-09-01 08:14:18
 * @LastEditTime: 2020-09-04 16:05:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\layout\index.vue
-->
<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <tag-view />
      <app-main />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/index.vue'
import TagView from './components/tagView/index.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: { Sidebar, TagView, AppMain }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.sidebar-container {
  width: 200px;
  height: 100%;
  position: absolute;
  background-color: #304156;
}
.main-container {
  margin-left: 200px;
}
</style>
