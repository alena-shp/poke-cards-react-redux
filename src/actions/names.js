import pokeService from './../service/pokeService'

import {
  NAMES_DATA_REQUEST,
  NAMES_DATA_SUCCESS,
  NAMES_DATA_FAILURE,
} from "../types"

export const namesDataRequest = () => ({ type: NAMES_DATA_REQUEST })

export const namesDataSuccess = (names) => ({
  type: NAMES_DATA_SUCCESS,
  payload: names,
})

export const namesDataFailure = (err) => ({
  type: NAMES_DATA_FAILURE,
  payload: err,
})

export const namesFetch = () => {
  return function(dispatch) {
    dispatch(namesDataRequest())
    const pokeData = new pokeService()
    pokeData.getAllPokemons()
    .then(names => {
      dispatch(namesDataSuccess(names))
    })
    .catch(error => {
      const err = error.message
      dispatch(namesDataFailure(err))
    })
  }
}