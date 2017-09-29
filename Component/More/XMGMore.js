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
  Platform,
  TouchableOpacity,
  ScrollView
} from 'react-native';
var CommonCell = require('./XMGCommonCell');

var More = React.createClass({
      
  render() {
    return (
      <View style={styles.container}>
         {this.renderNavBarView()}
          <ScrollView>
              <View style={{marginTop:20}}>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫'/>
                  <CommonCell title='扫一扫' rightTitle='1.99M' />
              </View>

              <View style={{marginTop:20}}>
                  <CommonCell 
                    title='省流量模式'
                    isSwitch = {true}
                  />
                  <CommonCell 
                    title='省流量模式'
                    isSwitch = {true}
                  />
                  <CommonCell 
                    title='省流量模式'
                    isSwitch = {true}
                  />
                  <CommonCell 
                    title='省流量模式'
                    isSwitch = {true}
                  />
                  <CommonCell 
                    title='省流量模式'
                    isSwitch = {true}
                  />
                  <CommonCell 
                    title='省流量模式'
                    isSwitch = {true}
                  />
              </View>
          </ScrollView>
      </View>   
    );
  },

  renderNavBarView(){
    return (
        <View style={styles.navBarStyle}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>更多</Text>
            <TouchableOpacity onPress={() => {alert("点击了")}} style={styles.rightImageStyle}>
              <Image style={styles.iconStyle} source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2349119841,3517649765&fm=27&gp=0.jpg'}} />
            </TouchableOpacity>
        </View>
      )
  }



});
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e8e8e8'
  },


  navBarStyle: {
    height: Platform.OS == 'ios' ? 64 : 44,
    backgroundColor:'rgba(255,96,0,1.0)',
    flexDirection : 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  iconStyle:{
     width: Platform.OS ==='ios' ? 30 : 25,
     height:Platform.OS ==='ios' ? 30 : 25,
  },
  rightImageStyle:{
    position: 'absolute',
    right:5,
  }

});

module.exports = More;
