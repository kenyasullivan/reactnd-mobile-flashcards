import React from 'react'
import { Platform, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import CreateDeck from './components/CreateDeck'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { red, white } from './utils/colors'

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name='cards-outline'
            size={30}
            color={tintColor}
          />
        )
      }
    },
    CreateDeck: {
      screen: CreateDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name='new-message' size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? red : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : red,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
})

export default class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ backgroundColor: red, height: Constants.statusBarHeight }}
        >
          <StatusBar
            translucent
            backgroundColor={red}
            barStyle='light-content'
          />
        </View>
        <MainNavigator />
      </View>
    )
  }
}
