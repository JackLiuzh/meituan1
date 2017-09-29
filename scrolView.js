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
  Image
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var TimerMixin = require('react-timer-mixin');

var ImageData = require('./ImageData.json');

var FScrollViewDemol = React.createClass({
   mixins: [TimerMixin],

   getDefaultProps(){
      return{
        duration:1000
      }
   },

   getInitialState(){
    return{
        currentPage:0
    }
   },


   render(){
    return(
         <View style={styles.container}>
              <ScrollView
                  ref="scrollView"
                  horizontal= {true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled = {true}
                  onMomentumScrollEnd = {(e)=>this.onAnimationEnd(e)}
                  onScrollBeginDrag = {this.onScrollBeginDrag}
                  onScrollEndDrag = {this.onScrollEndDrag}
              >
                  {this.renderAllImage()}
              </ScrollView>

              <View style={styles.pageViewStyle}>
                  {this.renderPageCircle()}    
              </View>
         </View>
      );
   },

  onScrollBeginDrag(){
      this.clearInterval(this.timer);
  },

  onScrollEndDrag(){
       this.startTimer();
  },
   componentDidMount(){
     this.startTimer();
   },

   startTimer(){
      var scrollView = this.refs.scrollView;
      var imgCount = ImageData.data.length;
      this.timer =  this.setInterval(function(){
       var activePage=0;
       if((this.state.currentPage+1) >= imgCount){
        activePage=0;
       }else{
        activePage = this.state.currentPage+1;
       }

       this.setState({
        currentPage:activePage
       });

       var offsetX= activePage * width;
       scrollView.scrollResponderScrollTo({x:offsetX, y:0, animated:true});

      },this.props.duration);
   },
   renderAllImage(){
      var allImage = [];
      var imgsArr = ImageData.data;
      for(var i=0;i<imgsArr.length;i++){
        var imgItem = imgsArr[i];
        allImage.push(
              <Image key={i} source={{uri: imgItem.img}} style={{width:width,height:120}}/>
          );
      }
      return allImage;
   },


   renderPageCircle(){
    var style;

    var indicatorArr = [];
    var imgsArr = ImageData.data;
    for(var i=0;i<imgsArr.length;i++){
      style = (i==this.state.currentPage) ? {color:'orange'} : {color:'#ffffff'};
      indicatorArr.push(
           <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
        );
    }
    return indicatorArr;
   },


   onAnimationEnd(e){
      var offSetX = e.nativeEvent.contentOffset.x;
      var currentPage1 = Math.floor(offSetX / width);

      this.setState({
        currentPage:currentPage1
      });
   }
   
});

 


const styles = StyleSheet.create({
   container:{
      marginTop:25
   },
   pageViewStyle:{
    width:width,
    height:25,
    backgroundColor:'rgba(0,0,0,0.2)',
    position:'absolute',
    bottom:0,

    flexDirection:'row',
    alignItems:'center'
   }
});

module.exports = FScrollViewDemol;
