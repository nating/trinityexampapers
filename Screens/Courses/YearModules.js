import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet,RkChoiceGroup,RkChoice} from 'react-native-ui-kitten';


export default class YearModules extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Year Modules',
    title: `${navigation.state.params.year}`,
  });

  //Create item for ScrollView of Modules
  createItem = (module) => (
      <RkChoiceGroup key={module} rkType='bordered stretch' style={styles.item}>
        <TouchableOpacity choiceTrigger activeOpacity={.5} onPress={() => alert('hello')} style={{height: '100%',justifyContent: 'center'}}>
          <View style={styles.container}>
            <View>
              <RkText rkType='bold'>{module}</RkText>
            </View>
            <RkChoice />
          </View>
        </TouchableOpacity>
      </RkChoiceGroup>
  )

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
    height: 80,
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
  }
}));
