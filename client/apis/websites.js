import request from 'superagent'
import { setWebsites } from '../actions/index'

const rootUrl = '/api/v1'

export const getWebsites = (dispatch) => {
  return request
  .get(`${rootUrl}/websites`)
  .then(res => {
    return dispatch(setWebsites(res.body))
  })
  .catch(err => console.log(err))
}
