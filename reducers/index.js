import { CREATE_DECK, RECEIVE_DECKS, ADD_CARD_TO_DECK } from '../actions'

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
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          cards: [...state[action.title].cards, action.card]
        }
      }
    default:
      return state
  }
}
