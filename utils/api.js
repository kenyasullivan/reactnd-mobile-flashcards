import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'ReactndMobileFlashcards:decks'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse)
}

export function saveDeck (deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function saveCardToDeck (title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse)
    .then(decks => {
      const deck = decks[title]
      deck.cards.push(card)
      return saveDeck({ [title]: deck })
    })
}
