/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CSHText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} numberOfLines={5}>
          你好,我好,大家好
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red',
      letterSpacing:5,
      width:300,
      lineHeight:100,
      backgroundColor: 'yellow',
      textDecorationColor:'green',
      textDecorationStyle:'solid',
      textDecorationLine:'line-through'

  },

});

AppRegistry.registerComponent('CSHText', () => CSHText);
