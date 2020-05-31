import {
  ABILITY_DATA_REQUEST,
  ABILITY_DATA_SUCCESS,
  ABILITY_DATA_FAILURE,
} from "../types"

const initialAbilityData = {
  loading: false,
  ability: "",
  err: "",
}

const abilityReducer = (state = initialAbilityData, action) => {
  switch (action.type) {
    case ABILITY_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ABILITY_DATA_SUCCESS:
      return {
        loading: false,
        ability: action.payload,
        err: "",
      }
    case ABILITY_DATA_FAILURE:
      return {
        loading: false,
        ability: "",
        err: action.payload,
      }
    default:
      return state
  }
}

export default abilityReducer
