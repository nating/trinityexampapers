import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet,RkChoiceGroup,RkChoice} from 'react-native-ui-kitten';
import CheckModuleRow from './CheckModuleRow';


export default class YearModules extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Year Modules',
    title: `${navigation.state.params.year}`,
  });

  //Create item for ScrollView of Modules
  createItem = (module) => {
  return (
      <CheckModuleRow key={module} module={module}/>
  )
}

  render() {
    return (
      <ScrollView style={styles.list}>
        {this.props.navigation.state.params.modules.map(this.createItem)}
      </ScrollView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  item: {
    height: 60,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16
  },
  list: {
    backgroundColor: theme.colors.screen.base,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 34,
    textAlign: 'center',
    marginRight: 16
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: 'orange',
    borderWidth: 2,
  },
}));
