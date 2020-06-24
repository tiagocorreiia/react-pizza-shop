import { SALE_SELECTED } from './saleSelectedTypes'

export const changeSaleSelected = (selected) => {
  return {
    type: SALE_SELECTED,
    payload: selected,
  }
}
