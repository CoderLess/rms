<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <tag-view />
  </div>
</template>

<script>
import Sidebar from './components/sidebar/index.vue'
import TagView from './components/tagView/index.vue'

export default {
  components: { Sidebar, TagView }
}
</script>

<style>
</style>
