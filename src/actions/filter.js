import { FILTER_POKEMON } from '../types'

export const filterPokemon = filterName => ({
  type: FILTER_POKEMON,
  payload: filterName
})
