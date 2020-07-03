import { combineReducers } from 'redux'
import sizeReducer from './size/sizeReducer'
import doughReducer from './dough/doughReducer'
import borderReducer from './border/borderReducer'
import fillingReducer from './filling/fillingReducer'
import orderReducer from './order/orderReducer'
import saleReducer from './sale/saleReducer'
import saleSelectedReducer from './saleSelected/saleSelectedReducer'
import itemPriceReducer from './itemPrice/itemPriceReducer'
import userReducer from './user/userReducer'
import userLoginReducer from './userLogin/userLoginReducer'

const rootReducer = combineReducers({
  size: sizeReducer,
  dough: doughReducer,
  border: borderReducer,
  filling: fillingReducer,
  order: orderReducer,
  sale: saleReducer,
  selected: saleSelectedReducer,
  price: itemPriceReducer,
  user: userReducer,
  login: userLoginReducer,
})

export default rootReducer
