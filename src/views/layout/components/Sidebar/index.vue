<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar',
      'menus'
    ]),
    routes() {
      console.log(Array.isArray(this.$store.state.tree.menus))
      // 整体路由
      return this.$store.state.tree.menus
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  watch: {
    routes(n, o) {
      console.log(n)
    }
  },
  methods: {
  }
}
</script>
