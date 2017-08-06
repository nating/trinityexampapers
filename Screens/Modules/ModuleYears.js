import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,TouchableHighlight } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet} from 'react-native-ui-kitten';

export default class ModuleYears extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'ModuleYears',
    title: `${navigation.state.params.module.name}`,
  });

//---------------------Constructor-----------------------
 constructor() {
    super();
    this.state = {
    }
 }

  openPaper(paper){
    const { navigate } = this.props.navigation;
    navigate('Paper',{link: paper.link,year: paper.year});
  }

  //Create item for ScrollView of Modules
  createItem = (paper) => (
      <TouchableHighlight
        key={paper.year}
        style={styles.item}
        activeOpacity={1}
        onPress={() => this.openPaper(paper)}>
        <View style={styles.container}>
          <RkText>{paper.year}</RkText>
        </View>
      </TouchableHighlight>
  )

  render() {
    return (
      <ScrollView style={styles.list}>
        {this.props.navigation.state.params.module.papers.map(this.createItem)}
      </ScrollView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  item: {
    height: 60,
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
