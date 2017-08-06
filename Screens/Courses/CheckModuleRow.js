import Expo from 'expo';
import React,  {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet,RkChoiceGroup,RkChoice} from 'react-native-ui-kitten';


export default class CheckModuleRow extends React.Component {
  //---------------------Constructor-----------------------
   constructor(props) {
      super();
      this.state = {
        checked: false,
        title: props.module
      }
    }

   //TODO check whether the module has already been saved, so that it can be pre-checked
   //When the component will mount, get the name for the module and put it as the title
   componentWillMount(){
     const t = db.ref().child('Modules').child(this.props.module);
     t.on('value', snap => {
       module = snap.val();
       this.setState({title:module.name,moduleObject:module});
     });
     AsyncStorage.getItem('my_modules').then((value) => {
       my_modules = JSON.parse(value);
       for(i=0;i<my_modules.modules.length;i++){
         if(my_modules.modules[i].code==this.props.module){
           this.setState({checked:true});
         }
       }
     });
   }

  toggled(){
    //If previously unchecked, add the module to MyModules
    if(!this.state.checked){
      AsyncStorage.getItem('my_modules').then((value) => {
        my_modules = JSON.parse(value);
        newM = {code:this.props.module,name:this.state.title}
        my_modules.modules.push(newM);
        AsyncStorage.setItem('my_modules', JSON.stringify(my_modules));
        alert('setting'+JSON.stringify(my_modules));
      });
    }
    //If previously checked, remove the module from MyModules
    else{
      AsyncStorage.getItem('my_modules').then((value) => {
        my_modules = JSON.parse(value);
        for(i=0;i<my_modules.modules.length;i++){
          if(my_modules.modules[i].code==this.props.module){
            my_modules.modules.splice(i, 1);
          }
        }
        AsyncStorage.setItem('my_modules', JSON.stringify(my_modules));
        alert('setting'+JSON.stringify(my_modules));
      });
    }
    this.setState({checked:!this.state.checked});
  }

  render() {
  return (
        <TouchableOpacity activeOpacity={.5} onPress={() => this.toggled()} style={styles.item}>
          <View style={styles.container}>
            <Text style={{width:'75%'}}>{this.state.title}</Text>
            <View style={styles.checkbox} backgroundColor={this.state.checked? 'orange':'white'}/>
          </View>
        </TouchableOpacity>
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
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: 'orange',
    borderWidth: 2,
  },
}));
