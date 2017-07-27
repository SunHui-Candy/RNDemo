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
    Image
} from 'react-native';



// Image的小练习

//导入本地的数据
const  dataArr = require('./SHLocalData/data.json');

export default class DSHImage extends Component {
    render() {
        return (
            <View style={styles.container}>

                {this.rederItem()}
            </View>


        );
    }

//    创建一个子盒子放入数组
    rederItem(){
        //1. 创建组件数组
        let itemArr = [];
        //2. 遍历
        dataArr.forEach((value,index)=>{
            //2.1 创建组件装入数组
            console.log(value.icon);

            itemArr.push(
                <View key={index} style={styles.innerViewStyle}>

                    <Image source={{uri:'image2'}} style={styles.imgStyle}/>
                    <Text>{value.name}</Text>

                </View>
            );
        });
        return itemArr;
    }






}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  //    设置主轴的方向

    flexDirection:'row',
  //    换行显示
      flexWrap:'wrap',
      justifyContent:'space-around',


  },

    innerViewStyle:{
      width:120,
        height:120,
        backgroundColor:'#e8e8e8',
        borderColor:'#ccc',
        borderWidth:1,

    //    主轴和侧轴居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:20



    },

    imgStyle:{
      width:80,
        height:80
    }
    //// img的使用
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },

});



// // img的使用
// export default class DSHImage extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>加载本地的图片</Text>
//         <Image
//           source={require('./img/imge1.png')}
//           style={{width:120,height:120}}
//         />
//         {/*这个图片没有加载出来*/}
//         <Text style={styles.welcome}>加载原生项目中的图片</Text>
//         <Image
//             source={{uri:'image2'}}
//             style={{width:50,height:50}}
//         />
//
//           <Text style={styles.welcome}>加载来自网络的图片</Text>
//           {/*
//            Image.resizeMode.cover：图片居中显示，没有被拉伸，超出部分被截断；
//            Image.resizeMode.contain：容器完全容纳图片，图片等比例进拉伸；
//            Image.resizeMode.stretch： 图片被拉伸适应容器大小，有可能会发生变形。
//           */}
//           <Image
//               source={{uri:'https://www.baidu.com/img/bd_logo1.png'}}
//               style={{width:200,height:100,resizeMode:Image.resizeMode.contain}}
//           />
//           <Image
//               source={{uri:'https://www.baidu.com/img/bd_logo1.png'}}
//               style={{width:200,height:100,resizeMode:Image.resizeMode.cover}}
//           />
//           <Image
//               source={{uri:'https://www.baidu.com/img/bd_logo1.png'}}
//               style={{width:200,height:100,resizeMode:Image.resizeMode.stretch}}
//           />
//
//
//       </View>
//
//
//     );
//   }
// }

AppRegistry.registerComponent('DSHImage', () => DSHImage);
