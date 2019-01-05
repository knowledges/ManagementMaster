import request from '@/utils/request'

export function getPowerTree() {
  return request({
    url: '/resources/SelectPermissionTree',
    method: 'POST'
  })
}
