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
  Platform
 
} from 'react-native';









var Main = require('./XMGMain');

var Launch = React.createClass({
  
getInitialState(){
  return{
      selectedTab:'home'
  }
},


  render() {
    return (
      <Image source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3042405254,1021769705&fm=27&gp=0.jpg'}} style={styles.launchImageStyle}/>
      
    );
  },
  componentDidMount() {
      setTimeout(()=>{
        this.props.navigator.replace({
          component:Main,
        });

      }, 1000);
  }
});



const styles = StyleSheet.create({
  launchImageStyle:{
    flex:1
  }
});

module.exports = Launch;
