import React,{Component} from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import Task from './Task'

export default class Body extends Component {
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tasks}
          renderItem={ ({item}) => (
          <Task 
            item = {item}
            deleteTask={this.props.deleteTask}
          />)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    justifyContent: 'center',
    // alignItems: 'center', 
    backgroundColor: '#98fb98',
  },
});
