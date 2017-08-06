import Expo from 'expo';
import React,  {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet,RkChoiceGroup,RkChoice} from 'react-native-ui-kitten';


export default class MyModulesRow extends React.Component {
  //---------------------Constructor-----------------------
   constructor(props) {
      super();
      this.state = {
      }
    }

   //TODO check whether the module has already been saved, so that it can be pre-checked
   //When the component will mount, get the name for the module and put it as the title
   componentWillMount(){
   }

  render() {
  return (
      <TouchableHighlight
        style={styles.item}
        activeOpacity={1}
        onPress={() => alert('ahh')}>
        <View style={styles.container}>
          <RkText>'yep'</RkText>
        </View>
      </TouchableHighlight>
  );
  }
}

let styles = RkStyleSheet.create(theme => ({
  item: {
    height: 60,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16,
    justifyContent: 'center',
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
  }
}));
