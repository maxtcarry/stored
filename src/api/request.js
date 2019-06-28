import axios from '@/api/axios.js'

function getlist(eliteId) {
  return axios.get(
    '/get_picked_product_info', {
      params: {
        eliteId: eliteId,
        pageIndex: 1,
        pageSize: 20,
        sort: 'asc',
        sortName: 'price'
      }
    })
}
//GET /api/get_product_category
function category(params) {
  return axios.get(
    '/get_product_category', {
      params: params
    })
}
/**
 * [/GET /api/get_keyword_product]
 * @param  {[object]} params [cid1,cid2,cid3,skuIds,keyword,sortName,isCoupon,isPG]
 * @return {[object]}        [description]
 */

function keywordPro(params) {
  return axios.get(
    '/get_keyword_product', {
      params: params
    })
}
export {
  getlist,
  category,
  keywordPro
}
