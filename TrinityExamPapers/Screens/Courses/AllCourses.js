import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';

export default class AllCourses extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: 'All Courses',
      drawerLabel: 'All Courses',
      headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        onPress={() => navigate('CourseYears', { module: 'MyCourse' })}
        title="Go to course years"
      />
    );
  }
}
