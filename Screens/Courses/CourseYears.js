import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableHighlight } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet} from 'react-native-ui-kitten';


export default class CourseYears extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Course Years',
    title: `${navigation.state.params.course}`,
  });


  openYearModules(year,index){
    const { navigate } = this.props.navigation;
    navigate('YearModules', { year: index, modules: year });
  }


  //Create item for ScrollView of Modules
  createItem = (year,index) => (
      <TouchableHighlight
        key={index}
        style={styles.item}
        activeOpacity={1}
        onPress={() => this.openYearModules(year,index)}>
        <View style={styles.container}>
          <RkText>{index}</RkText>
        </View>
      </TouchableHighlight>
  )

  render() {
    return (
      <ScrollView style={styles.list}>
        {this.props.navigation.state.params.years.map(this.createItem)}
      </ScrollView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  item: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16
  },
  list: {
    backgroundColor: theme.colors.screen.base,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 34,
    textAlign: 'center',
    marginRight: 16
  }
}));
