import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';

export default class About extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: 'About',
      drawerLabel: 'About',
      headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text>Hello About</Text>
    );
  }
}
