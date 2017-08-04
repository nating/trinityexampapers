import Expo from 'expo';
import React,  {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableHighlight } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {RkText,RkStyleSheet} from 'react-native-ui-kitten';

export default class AllCourses extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: 'All Courses',
      drawerLabel: 'All Courses',
      headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
    }
  };
  constructor(){
    super();
    this.state = {
      courses: []
    }
  }

  componentWillMount(){
    var courseJson = require('../../data/courses.json');
    this.setState({courses: courseJson.courses});
  }

  moveToCourse(course){
    const { navigate } = this.props.navigation;
    const c = db.ref().child('Courses').child(course.id);
    c.on('value', snap => {
      navigate('CourseYears', { course: course.name, years: snap.val() });
    });
  }

  //Create item for ScrollView of Modules
  createItem = (course) => (
      <TouchableHighlight
        key={course.id}
        style={styles.item}
        activeOpacity={1}
        onPress={() => this.moveToCourse(course)}>
        <View style={styles.container}>
          <RkText>{course.name}</RkText>
        </View>
      </TouchableHighlight>
  )

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.list}>
          {this.state.courses.map(this.createItem)}
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
