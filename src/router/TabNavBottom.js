//  底部导航
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Image, Text, View } from 'react-native';

//  页面
import Page1Screen from './TabNavTopHome';
import Page2Screen from './TabNavTopCommunity';
import Page3Screen from '../views/page3/index';
import Page4Screen from '../views/mine/index';


const style = StyleSheet.create({
  footImage: {
    width: 23,
    height: 23
  }
});

//Tab
export default createBottomTabNavigator({
  //每一个页面的配置
  Notice: {
    screen: Page1Screen,
    navigationOptions: () => ({
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => (
        <Image style={[style.footImage]}
          source={focused ? require('../static/image/icon1_2.png') : require('../static/image/icon1_1.png')}
        />
      )
    })
  },
  Complete: {
    screen: Page2Screen,
    navigationOptions: () => ({
      tabBarLabel: '社区',
      tabBarIcon: ({ focused }) => (
        <Image style={[style.footImage]}
          source={focused ? require('../static/image/icon2_2.png') : require('../static/image/icon2_1.png')}
        />
      )
    })
  },
  Home: {
    screen: Page3Screen,
    navigationOptions: () => ({
      tabBarLabel: '通知',
      tabBarIcon: ({ focused }) => (
        <Image style={[style.footImage]}
          source={focused ? require('../static/image/icon3_2.png') : require('../static/image/icon3_1.png')}
        />
      )
    })
  },
  Me: {
    screen: Page4Screen,
    navigationOptions: () => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ focused }) => (
        <Image style={[style.footImage]}
          source={focused ? require('../static/image/icon4_2.png') : require('../static/image/icon4_1.png')}
        />
      )
    })
  }
}, {
  //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  backBehavior: "none",
  //　懒加载
  lazy: true,
  //设置Tab标签的属性
  tabBarOptions: {
    //共有属性
    showLabel: true,//是否显示label，默认开启
    activeBackgroundColor: '#fff',  // 活动选项卡的标签和图标颜色。
    activeTintColor: '#000',  // 活动选项卡的背景色。
    inactiveBackgroundColor: '#fff',   // 非活动选项卡的背景色。
    pressColor: '#999',//  波纹
    inactiveTintColor: '#999', // label和icon的背景色 不活跃状态下（未选中）。
    style: { //TabNavigator 的背景颜色
      backgroundColor: '#fff',
      height: 50
    },
    showIcon: true,
    labelStyle: {//文字的样式
      fontSize: 11,
      marginTop: 0
    },
    tabStyle: {
      fontSize: 14
    },
    indicatorStyle: {
      height: 0
    }
  }
});