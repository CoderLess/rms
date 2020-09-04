<!--
 * @Author: your name
 * @Date: 2020-09-01 08:14:18
 * @LastEditTime: 2020-09-04 14:32:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\layout\components\sidebar\index.vue
-->
<template>
  <div class="sildbar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"
               :unique-opened="false"
               :collapse-transition="false"
               background-color="#304156"
               text-color="#ffffff"
               active-text-color="#409EFF"
               mode="vertical">
        <sidebar-item v-for="route in routes"
                      :key="route.path"
                      :item="route"
                      :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import { menuList } from '@/api/menu.js'
export default {
  components: { SidebarItem },
  data () {
    return {
      routes: []
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }

    // isCollapse () {
    //   return !this.sidebar.opened
    // }
  },
  created () {
    this.routes = menuList().then(response => {
      this.routes = response.data
    })
  }
}
</script>

<style lang="scss" scoped>
.el-menu-item {
  background: #304156;
}
</style>
