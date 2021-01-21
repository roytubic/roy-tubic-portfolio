import request from 'superagent'
import { setWebsites } from '../actions/index'

const rootUrl = '/api/v1'

export function getWebsites () {
  return request
  .get(`${rootUrl}/websites`)
  .then(res => {
    return res.body})
  }
