<template>
  <div id="app">
    <!-- header -->
    <header v-if="token != '' && roles.length > 0" class="header"> <!-- flex 布局 -->
      <div class="header-log"> <!-- 更加具体项目写具体的长度 -->
        <a href="javascript:;;">
          <span class="svg-container">
            <!--<svg-icon icon-class="basics" />-->
          </span>
          <h3>母版主题框架</h3>
        </a>
      </div>
      <nav class="header-nav">
        <div class="header-menu">
          <ul>
            <template v-for="(item, key) in powers">
              <li :key="key" @click="getMenus(item, key)">
                <a href="javascript:;;">
                  <span class="svg-container">
                    <svg-icon :icon-class="item.meta.icon" />
                  </span>
                  {{ item.name }}
                </a>
              </li>
            </template>
          </ul>
        </div>
        <!--<div class="header-func">-->
        <!--</div>-->
      </nav>
      <div class="header-func">
        <!-- 添加日志 -->
        <!-- 右边头像菜单 -->
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
            <i class="el-icon-caret-bottom"/>
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link class="inlineBlock" to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">LogOut</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'avatar',
      'token',
      'roles',
      'powers',
      'menus'
    ])
  },
  created() {
    /* 第一次加载进来没有菜单需要手动加载一次 默认为树的第一个节点下的子类 */
    if (this.menus.length <= 0 && this.powers.length > 0) {
      var idx = sessionStorage.getItem('menu_idx') || 0
      this.$store.dispatch('SetMenusList', this.powers[idx].children)
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    getMenus(obj, idx) {
      sessionStorage.setItem('menu_idx', idx)
      /* 显示菜单列表 */
      this.$store.dispatch('SetMenusList', obj.children)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#009688;
  $colors: #FFF;
  h3{
    color: $colors;
    margin: 0;
    line-height: 80px;
  }
  header {
    position: fixed;
    height: 80px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: $bg;
    z-index: 2;
    display: flex;
    flex-direction: row;
  }
  .header-log {
    width: 200px;
    background: orange;
  }
  .header-nav {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    .header-menu{
      display: inline-block;
      width: 100%;
      height: 100%;
      ul {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 0 0;
        margin: 0 0;
        list-style: none;
        li {
          float: left;
          padding: 13px 20.5px;
          a {
            font-size: 16px;
            color: #FFF;
            text-align: center;
            span {
              display: block;
              svg {
                display: inline-block;
                margin-bottom: 10px;
                width: 24px;
                height: 24px;
              }
            }
          }
        }
      }
    }
  }
  .header-func{
    width: 200px;
    background: orange;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 20px; /* NavBar 中 margin-top：5px */
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
</style>
