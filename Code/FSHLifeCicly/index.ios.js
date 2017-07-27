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
    TouchableOpacity,
    Image
} from 'react-native';

const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');
const dataArr = require('./Data/data.json');

export default class FSHLifeCicly extends Component {
  //  构造
    constructor(props){
        super(props);
    //    初始状态
        this.state = {
            showViewArr:[]
        };
    }

  render() {
    return (
      <View style={styles.container}>
          {/*上面的视图*/}
          <View style={styles.topViewStyle}>

              <TouchableOpacity
                  onPress={()=>this.addShop()}
                  style={styles.btnStyle}
              >
                  <Text>添加商品</Text>

              </TouchableOpacity>

              <TouchableOpacity
                  onPress={()=>this.removeShop()}
                  style={[styles.btnStyle,{backgroundColor:'red'}]}

              >

                  <Text>删除商品</Text>

              </TouchableOpacity>

          </View>

          {/*下面的图片*/}
          <View style={styles.contentViewStyle}>
              {this.state.showViewArr}
          </View>
      </View>
    );
  }

  addShop(){
      // alert('添加');
  //    1.总列数 宽高
      let cols = 3, shopW = 100, shopH = 120;
  //    2.全局的索引
      var index = this.state.showViewArr.length;
  //    验证
      if (index > dataArr.length - 1){
        alert('够了!');
        return;
      }

  //    3. 根据索引求出当前盒子的行号和列号
      let col = parseInt(index % cols);
      let row = parseInt(index / cols);

      let leftSpace = (width * 0.9 - cols * shopW)/(cols - 1);
      let  topSpace = (height * 0.8 - 3 * shopH) / 2;

      let left = (shopW + leftSpace) * col;
      let  top = (shopH + topSpace) * row;

  //    4.创建组件
      let shopView = (
          <View
            style={
                {
                   position:'absolute',
                    left:left,
                    top:top,
                    justifyContent:'center',
                    alignItems:'center'
                }
            }
            key = {index}
          >
              <Image
                source={{uri:dataArr[index].icon}}
                style={{width:shopW, height:shopW, backgroundColor:'#dad'}}
              />
              <Text> {dataArr[index].name}</Text>

          </View>
      );

      var tempArr = this.state.showViewArr;
      tempArr.push(shopView);

      this.setState({
          showViewArr:tempArr
      });



  }
    removeShop(){
        // alert('删除');
        if (this.state.showViewArr.length == 0 ){
            alert('购物车已经空了');
            return;
        }
        var tempArr = this.state.showViewArr;
        tempArr.pop();

        this.setState({
           showViewArr:tempArr
        })

    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

    topViewStyle:{
        padding:30,
        // backgroundColor:'#fed',
        flexDirection:'row',
        justifyContent:'space-around'

    },
    btnStyle: {
      width:120,
        height:40,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },

    contentViewStyle:{
      backgroundColor:'#fff',
        width:width*0.9,
      height:height* 0.8,
        marginLeft:width * 0.05

    }


});

AppRegistry.registerComponent('FSHLifeCicly', () => FSHLifeCicly);
