import { CREATE_DECK, RECEIVE_DECKS } from '../actions'

export default function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case CREATE_DECK:
      return {
        ...state,
        ...action.deck
      }
    default:
      return state
  }
}
