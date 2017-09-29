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
  Dimensions
} from 'react-native';
var MiddleData = require('./MiddleData.json');
var {width} = Dimensions.get('window');
var MineMiddleView = React.createClass({
    
   
  render() {
    return (
      <View style={styles.container}>
           {this.renderAllItem()}
      </View>
    );
  },
  
  renderAllItem(){
      var itemArr = [];
      for(var i=0; i<MiddleData.length; i++){
          var data = MiddleData[i];
          itemArr.push(
              <InnerView key={i} iconName={data.iconName} title={data.title}/>
          );
      }
      return itemArr;  
  }
});

var InnerView = React.createClass({
  getDefaultProps(){
    return{
       iconName:'',
       title: ''
    }
  },

  render(){
    return(
         <View>
            <Image style={{width:30,height:30}} source={{uri: this.props.iconName}}/>
            <Text>{this.props.title}</Text>
         </View>
    )
  }


});

const styles = StyleSheet.create({
  container:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     backgroundColor:'white'

  },
  
});

module.exports = MineMiddleView;
