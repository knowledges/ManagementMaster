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

