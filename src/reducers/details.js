import { DETAILS_DATA_REQUEST, DETAILS_DATA_SUCCESS, DETAILS_DATA_FAILURE } from '../types'

const initialDetailsData = {
  loading: false,
  details: [],
  err: ''
}

const detailsReducer = (state = initialDetailsData, action) => {
  switch (action.type) {
    case DETAILS_DATA_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DETAILS_DATA_SUCCESS:
      return {
        loading: false,
        details: action.payload,
        err: ''
      }
    case DETAILS_DATA_FAILURE:
      return {
        loading: false,
        details: [],
        err: action.payload
      }
    default:
      return state
  }
}

export default detailsReducer
