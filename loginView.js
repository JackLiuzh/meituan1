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


var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

 class loginView extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Image source={require('./img/qq.jpg')} style={styles.iconStyle} />
          <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} />
          <TextInput placeholder={'请输入密码'} style={styles.textInputStyle} password={true} />
          <TouchableOpacity activeOpactiy={0.8}>
          <View style={styles.loginBtnStyle} onPress={this.renderPress()}>
              <Text style={{color:'white'}}>登录</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.settingStyle}>
               <Text>无法登录</Text>
               <Text>新用户</Text>
          </View>
          <View style={styles.otherLoginStyle}>
               <Text>其他登录方式</Text>
               <Image  source={require('./img/qq.jpg')} style={styles.otherImageStyle}  />
               <Image source={require('./img/qq.jpg')} style={styles.otherImageStyle}  />
               <Image source={require('./img/qq.jpg')} style={styles.otherImageStyle}  />
          </View>
      </View>
    );
}

renderPress() {
     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#dddddd',
    alignItems:'center'
  },
  iconStyle:{
    marginTop:50,
    marginBottom:30,
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:2,
    borderColor:'white'

  },
  textInputStyle:{
    width:width,
    height:38,
    backgroundColor:'white',
    marginBottom:2,
    textAlign:'center'
  },
  loginBtnStyle:{
    height:35,
    width:width*0.8,
    backgroundColor:'blue',
    marginTop:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginBottom:8,
  },
  settingStyle:{
    flexDirection:'row',
    width:width*0.8,
    justifyContent:'space-between'
  },
  otherLoginStyle:{
    flexDirection:'row',
    alignItems:'center',
    position:'absolute',
    bottom:30,
    left:20,

  },
  otherImageStyle:{
    width:60,
    height:60,
    borderRadius:30,
    marginLeft:20,
  }
});

module.exports = loginView;
