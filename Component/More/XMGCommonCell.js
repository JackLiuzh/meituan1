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
  TouchableOpacity,
  Platform,
  Switch

} from 'react-native';

var CommonCell = React.createClass({

  getDefaultProps(){
    return{
        title: '',
        isSwitch:false,
        rightTitle:''
    }
  },

  getInitialState(){
     return{
         isOn: false
     }
  },
      
  render() {
    return (
    <TouchableOpacity onPress={()=>{alert('点击了')}}>
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.title}</Text>
        {this.renderRightView()}
      </View>
    </TouchableOpacity>  
    );
  },

  renderRightView(){
    if(this.props.isSwitch){
      return(
          <Switch value={this.state.isOn==true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} />
        )
    }else{
      return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
         {this.rightTitle()}
         <Image style={styles.imageStyle} source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=320170681,2968189466&fm=27&gp=0.jpg'}} />
        </View>
        )
    }
  },

  rightTitle(){
        if(this.props.rightTitle.length > 0){
          return(
            <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
          )
        }
  }



});



const styles = StyleSheet.create({
  container: {
    height:44,
    backgroundColor:'white',
    borderBottomColor:'#dddddd',
    borderBottomWidth:0.5,
    flexDirection : 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
 imageStyle:{
      width:Platform.OS=='ios'? 40 : 32,
      height:Platform.OS=='ios'? 40 : 32
 }
});

module.exports = CommonCell;
