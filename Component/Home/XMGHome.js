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
  TextInput,
  Image,
  Platform,
  ScrollView
} from 'react-native';

var Dimensions= require('Dimensions');
var {width,height} = Dimensions.get('window');
var TopView = require('./XMGTopView');

var HomeDetail = require('./XMGHomeDetal')
var Home = React.createClass({
      
  render() {
    return (
      <View style={styles.container}>
          {this.renderNavBar()}  
           <ScrollView>
               <TopView/>
           </ScrollView> 
      </View>
    );
  },

renderNavBar() {
    return(
      <View style={styles.navBarStyle}>
          <TouchableOpacity onPress={()=>{alert('点击了')}}>
          <Text style={{color:'white'}}>广州</Text>
          </TouchableOpacity>
          <TextInput
              placeholder = "输入商家,品类,商圈"
              style = {styles.topInputStyle}
          />
          <View style={{flexDirection:'row'}}>
              <Image source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=186879882,3756560845&fm=200&gp=0.jpg'}} style = {styles.navRightImg}/>
              <Image source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=186879882,3756560845&fm=200&gp=0.jpg'}} style = {styles.navRightImg}/>

           </View>
      </View>
      
      )
},

pushToDetail(){
  this.props.navigator.push(
    {
       component: HomeDetail,
       title:'详情页'
    }
  );
}

});

const styles = StyleSheet.create({
  topInputStyle:{
    width:width * 0.7,
    height:35,
    backgroundColor:'white',
    borderRadius:18,
    paddingLeft:8
  },
  navBarStyle:{
     height:Platform.OS=='ios' ? 64 : 44,
     backgroundColor:'rgba(255,96,0,1.0)',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-around'
  },
  navRightImg:{
    width:30,
    height:30
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Home;
