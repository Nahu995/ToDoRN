import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  Text
} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      text: '',
    };
  }

  changeText = (value) => {
    console.log("changeText",value)
    this.setState({ text: value });
  }

  addTask = () => {
    console.log(this.state.text)
    this.setState({
      tareas: [...this.state.tasks, {text: this.state.text, key: Date.now()}],
      text: '',
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.key !== id);
    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          changeText={this.changeText}
          addTask={this.addTask}
          text={this.state.text}
        />
        <Text>{this.state.text}{console.log("HELLo")}</Text>
        <Body 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
