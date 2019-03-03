/**
  * 获取 BMAP 对象
  * author: qiu.bl
  * time: 2019/2/5
  */
export function getBMAP(data) {
  return JSON.parse(localStorage.getItem('BAMP'))
}

/**
  * 存储 BAMP 对象
  * author: qiu.bl
  * time: 2019/2/5
  */
export function setBMAP(data) {
  return localStorage.setItem('BAMP', data)
}

/**
  * 移除 BAMP 对象
  * author: qiu.bl
  * time: 2019/2/5
  */
export function rmvBAMP() {
  return localStorage.removeItem('BAMP')
}

/**
 * 创建地图
 * @param map map 对象
 * @param id 渲染的id
 * @param params x 和 y 坐标
 * @param zom 级别
 */
export function createMap(map, id, params, zom) {
  map = new window.BMap.Map(id) // 创建Map 实例
  map.centerAndZoom(window.BMap.Point(params.lng, params.lat), zom) // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom()
  map.addControl(window.BMap.NavigationControl())
  map.addControl(window.BMap.ScaleControl())
  map.addControl(window.BMap.OverviewMapControl())
}

export function rmvMap() {
}

