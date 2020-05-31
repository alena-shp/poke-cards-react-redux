import { FILTER_POKEMON } from '../types'

const initialFilterName = {
  filterName: ''
}

const filterReducer = (state = initialFilterName, action) => {
  switch (action.type) {
    case FILTER_POKEMON:
      return {
        ...state,
        filterName: action.payload
      }
    default:
      return state
  }
}

export default filterReducer
