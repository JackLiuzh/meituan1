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
  
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var TopView = React.createClass({
  getInitialState(){
     return{
        activePage: 0
     }
  },
  render() {
    return (
      <View style={styles.container}>
          <ScrollView
             horizontal = {true}
             pagingEnabled = {true}
             showsHorizontalScrollIndicator = {false}
             onMomentumScrollEnd = {this.onScrollAnimationEnd}
          >
             {this.renderScrollItem()} 
          </ScrollView>
      
          <View style={styles.indicatorViewStyle}>
              {this.renderIndicator()}
          </View>
      </View>
    );
  },


  onScrollAnimationEnd(e){
    var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

    this.setState({
         activePage : currentPage
    });
  },
  renderIndicator(){
      var indicatorArr =[];
      var style = '';
      for(var i=0; i<2;i++){
        style = (i=== this.state.activePage) ? {color:'red'} : {color:'gray'};

         indicatorArr.push(
             <Text style={[{fontSize:25}, style]} key={i}>&bull;</Text>
         )
      }
      return indicatorArr;
  },


  renderScrollItem(){
      var itemArr = [];
      var colorArr = ['red','green'];
      for(var i=0; i<colorArr.length;i++){
        itemArr.push(
            <View key={i} style={{backgroundColor: colorArr[i], width:width,height:120}}>
                <Text>{i}</Text>
            </View>
        );
      }
      return itemArr;
  }
});



const styles = StyleSheet.create({
  container: {
    
  },
 indicatorViewStyle:{
    flexDirection:'row',
    justifyContent:'center',

 },



});

module.exports = TopView;
