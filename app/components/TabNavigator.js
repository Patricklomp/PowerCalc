import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import IpfView from '../views/IpfView';
import WilksView from '../views/WilksView';


class IpfScreen extends React.Component {
  render() {
    return (
      <IpfView></IpfView>
    );
  }
}

class WilksScreen extends React.Component {
  render() {
    return (
      <WilksView></WilksView>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  IPF: IpfScreen,
  Wilks: WilksScreen,
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    activeBackgroundColor: '#2089dc',
    inactiveBackgroundColor: '#212121',
    animationEnabled: true,
    labelStyle:{
      fontSize:20, 
    }
  },
  
  
});

export default createAppContainer(TabNavigator);