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
  View,
    Image,

} from 'react-native';

const Dimensions = require('Dimensions');
const  {width, height, scale} = Dimensions.get('window');


// // 获取屏幕的宽、高、分辨率
// export default class BSHView extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           屏幕宽: {width + '\n'}
//           屏幕高: {height + '\n'}
//           屏幕分辨率:{scale + '\n'}
//         </Text>
//
//       </View>
//     );
//   }
// }

// 2. 相对定位和绝对定位
/*
* 结论：通常情况下设置position和absolute，定位的效果是一样的，
* 但是如果父组件设置了内边距，position会做出相应的定位改变，而absolute则不会(即paddingTop没有效果)。
* */
export default class BSHView extends Component {
    render() {
        return (
            <View style={{marginTop:50}}>

              <Text>相对定位</Text>
              <View style={{height:130, backgroundColor:'red',paddingTop:50}}>
                <Image source={require('./img/1.png')} style={styles.image1Style}/>
              </View>

              <Text>绝对定位</Text>
              <View style={{height:130, backgroundColor:'red',paddingTop:50}}>
                <Image source={require('./img/2.png')} style={styles.image2Style}/>
              </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

// 2. 相对定位和绝对定位
    image1Style:{
        width:60,
        height:60,
        position:'relative',
        top:10,
        left:15
    },
    image2Style:{
        width:60,
        height:60,
        position:'absolute',
        top:10,
        left:15
    }
  // 1.屏幕宽、高、分辨率
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },

});

AppRegistry.registerComponent('BSHView', () => BSHView);
// AppRegistry.registerComponent('BSHView', () => BSHPosition);
