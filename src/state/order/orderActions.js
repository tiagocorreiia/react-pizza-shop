import { GET_SIZE, GET_DOUGH, GET_BORDER, GET_FILLING } from './orderTypes'

export const getSize = (size) => {
  return {
    type: GET_SIZE,
    payload: size,
  }
}

export const getDough = (dough) => {
  return {
    type: GET_DOUGH,
    payload: dough,
  }
}

export const getBorder = (border) => {
  return {
    type: GET_BORDER,
    payload: border,
  }
}

export const getFilling = (filling) => {
  return {
    type: GET_FILLING,
    payload: filling,
  }
}
