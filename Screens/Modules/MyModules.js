import Expo from 'expo';
import React,  {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet} from 'react-native-ui-kitten';
import MyModulesRow from './MyModules';


export default class MyModules extends React.Component {

//-Constructor------------------------------------------------------------------
  constructor(){
    super();
    this.state = {
      modules: []
    }
  }

//-Navigation-------------------------------------------------------------------
  static navigationOptions = function(props) {
    return {
      title: 'My Modules',
      drawerLabel: 'Home',
      headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />,
      header:(// Your custom header
           <View style={{
                  height:40,
                  marginTop:20,// only for IOS to give StatusBar Space
                  flexDirection:'row',
                  justifyContent: 'space-between',
            }}>
            <Button style={{margin:15}} onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
            <Text style={{textAlign: 'center',alignSelf: 'baseline'}}>My Modules</Text>
            <Button style={{margin:15}} onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
           </View>
      )}
  };

//-Methods----------------------------------------------------------------------

  //Get the module names from AsyncStorage
  componentWillMount(){
    AsyncStorage.getItem('my_modules').then((value) => {
      my_modules = JSON.parse(value);
      this.setState({modules:my_modules.modules});
    });
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
    if(this.state.modules.length>0){
      return (
        <ScrollView style={styles.list}>
            {this.state.modules.map(this.createItem)}
          </ScrollView>
      );
    }
    else{
      return(
        <View>
          <Text>You have no modules</Text>
        </View>
      )
    }
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
