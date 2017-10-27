import { saveDeck } from '../utils/api'
export const CREATE_DECK = 'CREATE_DECK'

export function createDeck (title) {
  const deck = {
    [title]: { title }
  }
  saveDeck(deck)
  return {
    type: CREATE_DECK,
    deck
  }
}
