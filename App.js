import { Constants } from 'expo'
import React from 'react'
import { Platform, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import CreateDeck from './components/CreateDeck'
import DeckDetail from './components/DeckDetail'
import CreateCard from './components/CreateCard'
import Quiz from './components/Quiz'
import reducer from './reducers'
import { red, white } from './utils/colors'
import { setLocalNotification } from './utils/notifications'

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

const stackNavigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: red
  }
}

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: stackNavigationOptions
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      title: 'Add Card',
      ...stackNavigationOptions
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      ...stackNavigationOptions
    }
  }
})

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }

  render () {
    return (
      <Provider store={createStore(reducer)}>
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
      </Provider>
    )
  }
}
