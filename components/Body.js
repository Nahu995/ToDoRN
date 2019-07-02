import React,{Component} from 'react';
import {
  View, 
  StyleSheet, 
  FlatList, 
  ActivityIndicator
} from 'react-native';
import Task from './Task'

export default class Body extends Component {
  render () {
    return (
      <View style={styles.container}>
        {this.props.loadingTask &&
          <ActivityIndicator 
            size= 'large'
            color='#3880FF'
          />
        }
        {!this.props.loadingTask &&
        <FlatList
          data={this.props.tasks}
          renderItem={ ({item}) => (
          <Task 
            item = {item}
            deleteTask={this.props.deleteTask}
          />)}
        />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    justifyContent: 'center',
    backgroundColor: '#98fb98',
  }
});
