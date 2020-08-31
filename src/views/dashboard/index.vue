<template>
  <div class="dashboard-container">
    <component :is="dashboard" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
export default {
  name: 'dashboard',
  components: {
    adminDashboard, editorDashboard
  },
  data () {
    return {
      dashboard: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'role'
    ])
  },
  created () {
    // 如果没有管理员角色默认为编辑
    if (!this.role.includes(1)) {
      this.role = 'editor'
    }
  }
}
</script>

<style>
</style>
