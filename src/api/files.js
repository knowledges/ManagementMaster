import request from '@/utils/request'
/*
* 请求相片集
* */
export function getAlbumList() {
  return request({
    url: '/album/SelectList',
    method: 'POST'
  })
}
