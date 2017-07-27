/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//1. 从react中加载React 和 Component组件
/*
* React是默认组件，Component是非默认组件，都在node_modules的react文件夹中。
* AppRegistry,StyleSheet,Text,View是原生组件，
* 在node_modules下的react-native文件夹中
*
* */
import React, { Component } from 'react';

//2. 从react-native中加载原生组件
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


//3. 自定义组件类, export default作为默认输出组件类
export default class AhelloWorld extends Component {
  // 3.1 实例化组件方法，用于渲染组件
  render() {
    return (
        //在ReactNative中，调用表达式、对象、字典的时候都需要用{}包住,如 <View style={styles.container}>

        <View style={styles.container}>
          <Text style={styles.welcome}>
            孙永会的React-Native的APP
          </Text>
      </View>
    );
  }
}

// 4.创建样式类, 根据每一个样式对象中的描述,创建样式表，并作用于组件
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
  },

});

// 5. 注册组件,程序入口
// 第一个参数:注册模块名称，一定要工程名保持一致
// 第二个参数:箭头函数，调用上面组件类
AppRegistry.registerComponent('AhelloWorld', () => AhelloWorld);
