
import payload from '../data/data.json'
import { LOAD_PAGE_REQUEST } from '../constants/actionTypes'

export const loadPagePortfolio = () => (
  { 
    type: LOAD_PAGE_REQUEST,
    payload
  }
)

