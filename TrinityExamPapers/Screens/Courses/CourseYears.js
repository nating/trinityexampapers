import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';


export default class CourseYears extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Course Years',
    title: `$`,
  });

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back to all courses"
      />
    );
  }
}
