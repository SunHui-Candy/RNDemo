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
    TextInput,
    TouchableOpacity,

} from 'react-native';

const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

export default class ESHTextInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*头像*/}
        <Image source={require('./img/image2.png')} style={styles.iconStyle}/>

          {/*中间部分*/}
          {/*输入框部分*/}
          <TextInput placeholder="请输入用户名"
                     clearButtonMode="always"
                     underlineColorAndroid="transparent"
                     style={styles.inputStyle}
          />
          <TextInput placeholder="请输入密码"
                     clearButtonMode="always"
                     underlineColorAndroid="transparent"
                     password={true}
                     style={styles.inputStyle}
          />

          {/*登录按钮*/}
          <TouchableOpacity activeOpacity={0.5}
                            //点击事件
                            onPress={()=>this.loginClick()}
                            style={styles.loginBtnStyle}>

              <Text style={{color:'#fff', fontSize:18}}>登 录</Text>

          </TouchableOpacity>

          {/*默认设置*/}
          <View style={styles.defultViewStyle}>
              {/*左边*/}
              <TouchableOpacity
                onLongPress={()=>{alert('长按事件!!');}}
              >
                  <Text>无法登录</Text>

              </TouchableOpacity>

              {/*右边*/}
              <TouchableOpacity>
                  <Text>新用户</Text>

              </TouchableOpacity>

          </View>


          {/*底部*/}
          <View style={styles.bottomStyle}>
              <Text>其它方式登录:</Text>
              <Image source={require('./img/m_3_100.png')} style={styles.bottomIconStyle}/>
              <Image source={require('./img/m_8_100.png')} style={styles.bottomIconStyle}/>
              <Image source={require('./img/m_10_100.png')} style={styles.bottomIconStyle}/>
          </View>
      </View>
    );
  }

  loginClick(){
      alert('请输入用户名');
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

    iconStyle: {
    marginTop:50,
      width:100,
        height:100,
        borderColor:'#fff',
        borderWidth:3,
        borderRadius:50,
        marginBottom:30,
    },


    inputStyle: {
      height:36,
        width:width,
        backgroundColor:'#fff',
        marginBottom:1,
        textAlign:'center',


    },

    loginBtnStyle:{
      height:36,
        width:width*0.95,
        backgroundColor:'#e9232c',
        marginTop:30,
        marginBottom:20,
        borderRadius:5,
    //   设置主侧轴居中
        justifyContent:'center',
        alignItems:'center',

    },

    defultViewStyle:{
      width:width * 0.95,
      //  改变主轴的方向
      flexDirection:'row',
        justifyContent:'space-between'
    },


    bottomStyle:{
        position:'absolute',
      left:10,
        bottom:10,
    //改变主轴的方向
        flexDirection:'row',
        alignItems:'center',
    },
    bottomIconStyle:{
width:40,
        height:40,
        borderRadius:20,
        marginLeft:10,
    }


});

AppRegistry.registerComponent('ESHTextInput', () => ESHTextInput);
