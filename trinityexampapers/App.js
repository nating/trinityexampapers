import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import * as Screens from './Screens';
import MyModules from './Screens/Modules/MyModules';
import ModuleYears from './Screens/Modules/ModuleYears';
import AllCourses from './Screens/Courses/AllCourses';
import CourseYears from './Screens/Courses/CourseYears';
import About from './Screens/About';

const MyModulesScreenNavigator = StackNavigator({
  MyModulesd: { screen: MyModules, },
  ModuleYears: { screen: ModuleYears, },
});

const AllCoursesScreenNavigator = StackNavigator({
  AllCourses: { screen: AllCourses },
  CourseYears: { screen: CourseYears },
});

const AboutScreenNavigator = StackNavigator({
  About: { screen: About },
});

MyModulesScreenNavigator.navigationOptions = {
  title: 'My Modules',
};

AllCoursesScreenNavigator.navigationOptions = {
  title: 'All Courses',
};

AboutScreenNavigator.navigationOptions = {
  title: 'About',
}

const SimpleApp = DrawerNavigator({
  MyModules: { screen: MyModulesScreenNavigator },
  AllCourses: { screen: AllCoursesScreenNavigator },
  About: { screen: AboutScreenNavigator },
});

export default class App extends Component {
  render() {
    return (
        <SimpleApp />
    );
  }
}
