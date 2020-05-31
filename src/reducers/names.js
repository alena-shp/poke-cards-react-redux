import {
  NAMES_DATA_REQUEST,
  NAMES_DATA_SUCCESS,
  NAMES_DATA_FAILURE,
} from "../types"

const initialNamesData = {
  loading: false,
  names: [],
  err: "",
}

const namesReducer = (state = initialNamesData, action) => {
  switch (action.type) {
    case NAMES_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case NAMES_DATA_SUCCESS:
      return {
        loading: false,
        names: action.payload,
        err: "",
      }
    case NAMES_DATA_FAILURE:
      return {
        loading: false,
        names: [],
        err: action.payload,
      }
    default:
      return state
  }
}

export default namesReducer