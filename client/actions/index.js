import { getWebsites } from '../apis/websites'

export const SET_WEBSITES = 'SET_WEBSITES'

export const setWebsites = (websites) => {
  return {
    type: SET_WEBSITES,
    websites: websites
  }
}

// export function fetchWebsites () {
//   return dispatch => {
//     return getWebsites()
//       .then(websites => {
//         dispatch(setFruits(websites))
//         return null
//       })
//   }
// }
