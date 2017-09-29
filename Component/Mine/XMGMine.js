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
  ScrollView
} from 'react-native';
var Mycell = require('./XMGMycell');
var MiddleView = require('./XMGMineMiddleView');

var Mine = React.createClass({
    
  render() {
    return (
    <ScrollView>
      <View style={{marginTop:20}}>
           <Mycell  
               leftIconName='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=394744169,1301339285&fm=200&gp=0.jpg'
               leftTitle='我的订单'
               rightTitle='查看全部订单'
           />
           <MiddleView />          
      </View>
      <View style={{marginTop:20}}>
           <Mycell  
               leftIconName='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=394744169,1301339285&fm=200&gp=0.jpg'
               leftTitle='哈哈'
               rightTitle='132M'
           />
           <Mycell  
               leftIconName='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=394744169,1301339285&fm=200&gp=0.jpg'
               leftTitle='哈哈'
               rightTitle='132M'
           />
           <Mycell  
               leftIconName='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=394744169,1301339285&fm=200&gp=0.jpg'
               leftTitle='哈哈'
               rightTitle='132M'
           />
      </View>
      <View style={{marginTop:20}}>
           <Mycell  
               leftIconName='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=394744169,1301339285&fm=200&gp=0.jpg'
               leftTitle='哈哈'
               rightTitle='132M'
           />
      </View>
      <View style={{marginTop:20}}>
           <Mycell  
               leftIconName='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=394744169,1301339285&fm=200&gp=0.jpg'
               leftTitle='哈哈'
               rightTitle='132M'
           />
      </View>
    </ScrollView>

    );
  }
});



const styles = StyleSheet.create({
  
  
});

module.exports = Mine;
