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
