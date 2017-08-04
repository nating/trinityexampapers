import Expo from 'expo';
import React,  {Component} from 'react';
import { WebView } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet} from 'react-native-ui-kitten';

export default class Paper extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'ModuleYears',
    title: `${navigation.state.params.year}`,
  });

  render() {
    return (
      <WebView
        source={{uri: this.props.navigation.state.params.link}}
      />
    );
  }
}
