import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';

export default class MyModules extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: 'My Modules',
      drawerLabel: 'Home',
      headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        onPress={() => navigate('ModuleYears', { module: 'MyModule' })}
        title="Go to module years"
      />
    );
  }
}
