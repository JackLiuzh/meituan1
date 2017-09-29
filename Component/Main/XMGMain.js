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

import TabNavigator from 'react-native-tab-navigator';

import {Navigator} from  'react-native-deprecated-custom-components';



var Home = require('../Home/XMGHome');

var Mine = require('../Mine/XMGMine');

var More = require('../More/XMGMore');

var Shop = require('../Shop/XMGShop');

var Main = React.createClass({
  
getInitialState(){
  return{
      selectedTab:'home'
  }
},


  render() {
    return (
      <TabNavigator>
         <TabNavigator.Item
          title = "首页"
          renderIcon = {() => <Image source={{uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=137135150,2926639820&fm=27&gp=0.jpg'}} style={styles.iconStyle}/>}
          renderSelectedIcon = {() => <Image source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=710713748,1654893413&fm=27&gp=0.jpg'}} style={styles.iconStyle}/>}
          onPress = {() => {this.setState({selectedTab:'home'})}}
          selected = {this.state.selectedTab === 'home'}
         >
            <Navigator  
              initialRoute={{ name: '首页', component: Home }}  
              configureScene={() => {  
               return Navigator.SceneConfigs.PushFromRight;  
              }}  
            renderScene={(route, navigator) => {  
               let Component = route.component;  
               return <Component {...route.params} navigator={navigator} />;  
              }}  
            />  
         </TabNavigator.Item>

         <TabNavigator.Item
          title = "商家"
          renderIcon = {() => <Image source={{uri: 'http://www.iconpng.com/png/eldorado_basic/015.png'}} style={styles.iconStyle}/>}
          renderSelectedIcon = {() => <Image source={{uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=463656216,1210357546&fm=200&gp=0.jpg'}} style={styles.iconStyle}/>}
          onPress = {() => {this.setState({selectedTab:'shop'})}}
          selected = {this.state.selectedTab === 'shop'}
         >
            <Navigator  
              initialRoute={{ name: '商家', component: Shop }}  
              configureScene={() => {  
               return Navigator.SceneConfigs.PushFromRight;  
              }}  
              renderScene={(route, navigator) => {  
               let Component = route.component;  
               return <Component {...route.params} navigator={navigator} />;  
              }}  
            />  
         </TabNavigator.Item>

         <TabNavigator.Item
          title = "我的"
          renderIcon = {() => <Image source={{uri: 'http://www.iconpng.com/png/eldorado_basic/015.png'}} style={styles.iconStyle}/>}
          renderSelectedIcon = {() => <Image source={{uri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1484342823,356366591&fm=27&gp=0.jpg'}} style={styles.iconStyle}/>}
          onPress = {() => {this.setState({selectedTab:'mine'})}}
          selected = {this.state.selectedTab === 'mine'}
         >
            <Navigator  
              initialRoute={{ name: '我的', component: Mine }}  
              configureScene={() => {  
              return Navigator.SceneConfigs.PushFromRight;  
              }}  
               renderScene={(route, navigator) => {  
               let Component = route.component;  
               return <Component {...route.params} navigator={navigator} />;  
              }}  
            />
         </TabNavigator.Item>

         <TabNavigator.Item
          title = "更多"
          renderIcon = {() => <Image source={{uri: 'http://www.iconpng.com/png/eldorado_basic/015.png'}} style={styles.iconStyle}/>}
          renderSelectedIcon = {() => <Image source={{uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3749430945,1756305810&fm=27&gp=0.jpg'}} style={styles.iconStyle}/>}
          onPress = {() => {this.setState({selectedTab:'more'})}}
          selected = {this.state.selectedTab === 'more'}
         >
            <Navigator  
              initialRoute={{ name: '更多', component: More }}  
              configureScene={() => {  
              return Navigator.SceneConfigs.PushFromRight;  
              }}  
               renderScene={(route, navigator) => {  
               let Component = route.component;  
               return <Component {...route.params} navigator={navigator} />;  
              }}  
            />
         </TabNavigator.Item>
      </TabNavigator>
    );
  },

  


});



const styles = StyleSheet.create({
  iconStyle:{
     width: Platform.OS ==='ios' ? 30 : 25,
     height:Platform.OS ==='ios' ? 30 : 25
  }
});

module.exports = Main;
