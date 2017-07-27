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
    ScrollView,
    Image,
} from 'react-native';


//1.导入本地的数据
const  imageDataArr = require('./LocationData/data.json').data;

//2.获取宽度和高度
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

export default class GSHScrollView extends Component {
    // 构造
    constructor(props){
        super(props);
        //初始状态
        this.state = {
          currentPage: 0
        };
    }
  render() {
    return (
      <View style={styles.container}>
          {/*上部分*/}
          <ScrollView

            //水平滚动
              horizontal={true}
              //隐藏水平滚动条
              showsHorizontalScrollIndicator={false}
              //分页
              pagingEnabled={true}
              //滚动结束的时候调用
              onMomentumScrollEnd={(e)=>this.scrollEnd(e)}
              ref="myScrollView"

              // 开始拖拽可以调用
              onScrollBeginDrag={()=>{clearInterval(this.timer)}}

              //结束拖拽
            onScrollEndDrag={()=>this.startTimer()}

          >
              {this.renderImg()}

          </ScrollView>
          {/*下部分*/}
          <View style={styles.bootmViewStyle}>
              {this.renderIndicator()}
          </View>

      </View>
    );

  }

  //处理复杂和耗时的操作
    componentDidMount() {
        this.startTimer();
    }
  //开启定时器
    startTimer(){

        //    1.定义当前选中的索引
        var currentIndex = 0;
        const  countPage = imageDataArr.length;
        const myScrollView = this.refs.myScrollView;

        this.timer = setInterval(()=>{
        //    2. 判断
            if (this.state.currentPage + 1 >= countPage){
                currentIndex = 0;
            }else {
                currentIndex = (this.state.currentPage += 1);
            }

        //    3.改变索引
            this.setState({
                currentPage:currentIndex
            });

        //    4.让scrollview滚起来
            myScrollView.scrollResponderScrollTo({x:currentIndex * width, y:0, animated:true})
        }, 1000);
    }

  // 滚动结束的时候
    scrollEnd(e){
    //   1 获取水平方向滚动的偏移量
        const  offsetX = e.nativeEvent.contentOffset.x;
        const  index = parseInt(offsetX / width);
        // 2 更新状态机
        this.setState({
            currentPage:index
        });

    }
//  加载滚动的内容
    renderImg(){

    //  1.组件数组
        var itemArr = [];
        // 2.遍历
       imageDataArr.forEach((value,index)=>{
           itemArr.push(

               <Image key={index} source={{uri: value.icon}} style={styles.imgStyle}>

               </Image>

           )

       });
    //   3.返回组件数组
        return itemArr;
    }
    
    // 返回指示器
    renderIndicator(){
    //   1 组件数组
        var indicatorArr = [], style;
        // 2.遍历
        for(var i = 0; i<imageDataArr.length; i++){
        //    2.1 设置样式
            style= (this.state.currentPage == i) ? {color:'orange'} :{color:'white'}
            // 2.2 装入组件
            indicatorArr.push(
               <Text key={i} style={[{fontSize:35},style]}>·</Text> 
            );
        }
        // 返回组件数据
        return indicatorArr;
    }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },

    imgStyle: {
        width:width,
        height:width * 0.5
    },
    
    bootmViewStyle:{
      width:width,
        height:36,
        backgroundColor:'rgba(0,0,0,0.5)',
        
        position:'absolute',
        left:0,
        bottom:0,
        
      
      
      flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        
    }


});

AppRegistry.registerComponent('GSHScrollView', () => GSHScrollView);
