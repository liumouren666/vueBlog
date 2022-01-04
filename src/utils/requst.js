import request from '@/api'
 function getList () {
  return request({
    url: '/api/blog/list',
    method: 'get'
  })
}
 function getArticleById (id) {
  return request({
    url: '/api/blog/detail',
    method: 'get',
    params: { id }
  })
}
export default {
    getList,
    getArticleById
}