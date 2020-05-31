// import axios from 'axios'
import pokeService from './../service/pokeService'

import {
  ABILITY_DATA_REQUEST,
  ABILITY_DATA_SUCCESS,
  ABILITY_DATA_FAILURE,
} from "../types"

export const abilityDataRequest = () => ({ type: ABILITY_DATA_REQUEST })

export const abilityDataSuccess = (ability) => ({
  type: ABILITY_DATA_SUCCESS,
  payload: ability,
})

export const abilityDataFailure = (err) => ({
  type: ABILITY_DATA_FAILURE,
  payload: err,
})

export const abilityFetch = (id) => {
  return function(dispatch) {
    dispatch(abilityDataRequest())
    const pokeData = new pokeService()
    pokeData.detAbilityPokemon(id)
    .then(ability => {
      dispatch(abilityDataSuccess(ability))
    })
    .catch(error => {
      const err = error.message
      dispatch(abilityDataFailure(err))
    })
  }
}


// export const detailsFetch = () => {
//   return function(dispatch) {
//     dispatch(detailsDataRequest())
//     axios.get('https://pokeapi.co/api/v2/pokemon/1/')
//     .then(res => {
//       const details = res.data
//       dispatch(detailsDataSuccess(details))
//     })
//     .catch(error => {
//       const err = error.message
//       dispatch(detailsDataFailure(err))
//     })
//   }
// }