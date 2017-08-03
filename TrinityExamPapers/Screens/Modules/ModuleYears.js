import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';

export default class ModuleYears extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'ModuleYears',
    title: `$`,
  });

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back to my modules"
      />
    );
  }
}
