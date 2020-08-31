<template>
  <div class="sildbar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"
               :unique-opened="false"
               :collapse-transition="false"
               mode="vertical">
        <sidebar-item v-for="route in permission_routes"
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
export default {
  components: { SidebarItem },
  data () {
    return {
      permission_routes: {
        path: {},
        hidden: {},
        alwaysShow: {},
        children: {},
        meta: {
          title: '123'
        }
      }
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
  }
}
</script>

<style>
</style>
