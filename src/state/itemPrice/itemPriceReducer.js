import {
  SIZE_PRICE,
  DOUGH_PRICE,
  BORDER_PRICE,
  FILLING_PRICE,
} from './itemPriceTypes'

const initialState = {
  sizePrice: '',
  doughPrice: '',
  borderPrice: '',
  fillingPrice: '',
}

const itemPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIZE_PRICE:
      return {
        ...state,
        sizePrice: action.payload,
      }
    case DOUGH_PRICE:
      return {
        ...state,
        doughPrice: action.payload,
      }
    case BORDER_PRICE:
      return {
        ...state,
        borderPrice: action.payload,
      }
    case FILLING_PRICE:
      return {
        ...state,
        fillingPrice: action.payload,
      }
    default:
      return state
  }
}

export default itemPriceReducer
