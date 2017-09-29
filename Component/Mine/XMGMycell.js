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
  TouchableOpacity
} from 'react-native';

var Mycell = React.createClass({
   getDefaultProps(){
      return{
        leftIconName:'',
        leftTitle:'',
        rightIconName:'',
        rightTitle:''
      }
   },   

  render() {
    return (
      <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
          <View style={styles.leftViewStyle}>
              <Image source={{uri: this.props.leftIconName}} style={styles.leftImageStyle}/>
              <Text style={styles.leftTitelStyle}>{this.props.leftTitle}</Text>
          </View>

          <View style={styles.rightViewStyle}>
               {this.rightSubView()}
          </View>
      </View>
      </TouchableOpacity>
    );
  },
  
  rightSubView(){
    return(
        <View style={{flexDirection:'row',alignItems:'center'}}>
            {this.renderRightContent()}
            <Image source={{uri: this.props.leftIconName}} style={{width:8,height:13,marginRight:10}}/>
        </View>
    )
  },
  renderRightContent(){
     if(this.props.rightIconName.length == 0){
        return(
           <Text style={{color:'red'}}>{this.props.rightTitle}</Text>
        )
     }else{
        return(
           <Image style={{width:30,height:40}} source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2771660130,3805525717&fm=27&gp=0.jpg'}}/>
        )
     }
  }

});



const styles = StyleSheet.create({
  container: {
     height:42,
     backgroundColor:'white',
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
  },
  leftViewStyle:{
      flexDirection:'row',
      alignItems :'center',
      
      
  },
  leftImageStyle:{
      width:30,
      height:30,
      borderRadius:15
  },
  leftTitelStyle:{
      textAlign:'center',
      color:'gray',
  },
  rightViewStyle:{
    flexDirection:'row',
    alignItems :'center',
    
  }
});

module.exports = Mycell;
