import { saveDeck, saveCardToDeck } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

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
      cards: []
    }
  }

  saveDeck(deck)
  return {
    type: CREATE_DECK,
    deck
  }
}

export function addCardToDeck (title, card) {
  saveCardToDeck(title, card)
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  }
}
