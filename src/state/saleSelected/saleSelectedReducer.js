import { SALE_SELECTED } from './saleSelectedTypes'

const initialState = {
  selected: 'true',
}

const saleSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SALE_SELECTED:
      return {
        ...state,
        selected: action.payload,
      }
    default:
      return state
  }
}

export default saleSelectedReducer
