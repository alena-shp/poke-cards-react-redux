import pokeService from './../service/pokeService'

import { DETAILS_DATA_REQUEST, DETAILS_DATA_SUCCESS, DETAILS_DATA_FAILURE } from '../types'

export const detailsDataRequest = () => ({ type: DETAILS_DATA_REQUEST })

export const detailsDataSuccess = details => ({
  type: DETAILS_DATA_SUCCESS,
  payload: details
})

export const detailsDataFailure = err => ({
  type: DETAILS_DATA_FAILURE,
  payload: err
})

export const detailsFetch = id => {
  return function (dispatch) {
    dispatch(detailsDataRequest())
    const pokeData = new pokeService()
    pokeData
      .getPokemon(id)
      .then(details => {
        dispatch(detailsDataSuccess(details))
      })
      .catch(error => {
        const err = error.message
        dispatch(detailsDataFailure(err))
      })
  }
}
