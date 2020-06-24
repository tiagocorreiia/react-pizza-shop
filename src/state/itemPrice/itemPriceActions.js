import {
  SIZE_PRICE,
  DOUGH_PRICE,
  BORDER_PRICE,
  FILLING_PRICE,
} from './itemPriceTypes'

export const getSizePrice = (sizePrice) => {
  return {
    type: SIZE_PRICE,
    payload: sizePrice,
  }
}

export const getDoughPrice = (doughPrice) => {
  return {
    type: DOUGH_PRICE,
    payload: doughPrice,
  }
}

export const getBorderPrice = (borderPrice) => {
  return {
    type: BORDER_PRICE,
    payload: borderPrice,
  }
}

export const getFillingPrice = (fillingPrice) => {
  return {
    type: FILLING_PRICE,
    payload: fillingPrice,
  }
}
