import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

export default class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Header</Text>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.changeText}
          placeholder="Ingrese Texto"
          onSubmitEditing={this.props.addTask}
          value={this.props.text}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#00FF00',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});
