/**
 * 获取本地的权限树列表
 * author: woods.qiu
 * time: 2019年1月09日
 */
export function getPowerList() {
  return JSON.parse(sessionStorage.getItem('PowersList'))
}

/**
 * 新增本地的权限树列表
 * author: woods.qiu
 * time: 2019年1月09日
 */
export function setPowerList(data) {
  return sessionStorage.setItem('PowersList', data)
}

/**
 * 移除本地的权限树列表
 * author: woods.qiu
 * time: 2019年1月09日
 */
export function rmvPowerList() {
  return sessionStorage.removeItem('PowersList')
}

/**
 * 获取左侧菜单
 * author: woods.qiu
 * time: 2019年1月11日
 */
export function getMenusList() {
  return JSON.parse(sessionStorage.getItem('MenusList'))
}

/**
 * 新增左侧菜单
 * author: woods.qiu
 * time: 2019年1月11日
 */
export function setMenusList(data) {
  return sessionStorage.setItem('MenusList', data)
}

/**
 * 移除左侧菜单
 * author: woods.qiu
 * time: 2019年1月11日
 */
export function rmvMenusList() {
  return sessionStorage.removeItem('MenusList')
}

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * 路由重构【将 component 异步导入】
 * author: woods.qiu
 * time: 2019年1月23日
 */
export function getRouterRestructure(data) {
  data.forEach(item => {
    if (item.resUrl) {
      if (item.resUrl === 'Layout') {
        item.component = Layout
      } else {
        item.component = resolve => require([`../views${item.resUrl}.vue`], resolve)
      }
    }

    if (Array.isArray(item.children) && item.children.length > 0) {
      item.children = getRouterRestructure(item.children)
    }
  })
  return data
}
