import { getWebsites } from '../apis/websites'

export const SET_WEBSITES = 'SET_WEBSITES'

export function setWebsites (websites) {
  return {
    type: SET_WEBSITES,
    websites
  }
}

export function fetchWebsites () {
  return dispatch => {
    return getWebsites()
      .then(websites => {
        dispatch(setFruits(websites))
        return null
      })
  }
}
