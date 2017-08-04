import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableHighlight } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet} from 'react-native-ui-kitten';


export default class MyModules extends React.Component {

//-Constructor------------------------------------------------------------------
  constructor(){
    super();
    this.state = {
      modules: [{'code':'CS1001','name':'Mathematics'},{'code':'CS1002','name':'Mathematics II'},{'code':'CS1003','name':'MATHEMATICS'}]
    }
  }

//-Navigation-------------------------------------------------------------------
  static navigationOptions = function(props) {
    return {
      title: 'My Modules',
      drawerLabel: 'Home',
      headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
    }
  };

//-Methods----------------------------------------------------------------------

  //Get the module names from AsyncStorage
  componentWillMount(){
  }

  moveToModule(code){
    const { navigate } = this.props.navigation;
    const module = db.ref().child('Modules').child(code);
    module.on('value', snap => {
      navigate('ModuleYears', { module: snap.val() });
    });
  }

  //Create item for ScrollView of Modules
  createItem = (module) => (
      <TouchableHighlight
        key={module.code}
        style={styles.item}
        activeOpacity={1}
        onPress={() => this.moveToModule(module.code)}>
        <View style={styles.container}>
          <RkText>{module.name}</RkText>
        </View>
      </TouchableHighlight>
  )


//-Rendering--------------------------------------------------------------------
  render() {
    return (
      <ScrollView style={styles.list}>
          {this.state.modules.map(this.createItem)}
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
