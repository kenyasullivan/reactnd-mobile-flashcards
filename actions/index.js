import { saveDeck } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_DECK = 'CREATE_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function createDeck (title) {
  const deck = {
    [title]: {
      title,
      questions: []
    }
  }

  saveDeck(deck)
  return {
    type: CREATE_DECK,
    deck
  }
}
