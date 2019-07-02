import React from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      text: '',
      loadingTask: true,
    };
  }

  componentDidMount(){
    this.recoverTasks()
  }

  changeText = (value) => {
    this.setState({ text: value });
  }

  addTask = () => {
    const newTasks = [...this.state.tasks, {text: this.state.text, key: Date.now()}]
    this.saveTasks(newTasks)
    this.setState({
      tasks: newTasks,
      text: '',
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.key !== id);
    this.saveTasks(newTasks)
    this.setState({
      tasks: newTasks,
    });
  }

  saveTasks= (tasks) => {
    AsyncStorage.setItem('@ToDo:tasks', JSON.stringify(tasks))
    .then( (value) => console.log(value)) 
    .catch( (err) => console.log(err))
  }

  recoverTasks= () => {
    AsyncStorage.getItem('@ToDo:tasks')
    .then( (value) => {
      if( value !== null){
        const newTasks = (JSON.parse(value))
        this.setState({tasks: newTasks})
      }
      this.setState({
        loadingTask: false
      })
    })
    .catch( (err) => {
      console.log(err)
      this.setState({
        loadingTask: false
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          changeText={this.changeText}
          addTask={this.addTask}
          text={this.state.text}
        /> 
        <Body 
          tasks= {this.state.tasks} 
          deleteTask= {this.deleteTask}
          loadingTask= {this.state.loadingTask}
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
