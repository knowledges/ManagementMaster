import request from '@/utils/request'
/*
* 请求权限树
* */
export function getPowerTree() {
  return request({
    url: '/resources/SelectPermissionTree',
    method: 'POST'
  })
}
