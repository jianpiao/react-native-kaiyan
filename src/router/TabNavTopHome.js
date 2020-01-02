//  头部选项卡
import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Image, Text, View } from 'react-native';

//  页面
import FindScreen from '../views/find/index';
import RecommendScreen from '../views/recommend/index';
import DailyScreen from '../views/daily/index';

const style = StyleSheet.create({
  footImage: {
    width: 23,
    height: 23
  }
});


//Tab
export default createMaterialTopTabNavigator({
  //每一个页面的配置
  T1: {
    screen: FindScreen,
    navigationOptions: () => ({
      title: '发现',
      tabBarLabel: '发现'
    })
  },
  T2: {
    screen: RecommendScreen,
    navigationOptions: () => ({
      title: '推荐',
      tabBarLabel: '推荐'
    })
  },
  T3: {
    screen: DailyScreen,
    navigationOptions: () => ({
      title: '日报',
      tabBarLabel: '日报'
    })
  },
}, {
  // 首次加载时初始制表符路径的routeName。
  initialRouteName: 'T1',
  //设置TabNavigator的位置
  tabBarPosition: 'top',
  //是否在更改标签时显示动画
  animationEnabled: true,
  //是否允许在标签之间进行滑动
  swipeEnabled: true,
  //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  backBehavior: "none",
  //　懒加载
  lazy: true,
  //设置Tab标签的属性
  tabBarOptions: {
    //是否显示label，默认开启
    showLabel: true,
    activeBackgroundColor: '#666',
    activeTintColor: '#000',
    inactiveBackgroundColor: '#777',
    //  材质波纹的颜色（Android> =仅限5.0）
    pressColor: '#ccc',
    //  按下选项卡的不透明度（仅适用于iOS和Android <5.0）。
    pressOpacity: .5,
    // label和icon的背景色 不活跃状态下（未选中）。
    inactiveTintColor: '#777',
    //TabNavigator 的背景颜色
    style: {
      backgroundColor: '#f1f1f1',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      elevation: 0
    },
    //  是否显示选项卡的图标，默认为false。
    showIcon: false,
    // 是否启用可滚动选项卡。
    scrollEnabled: true,
    //文字的样式
    labelStyle: {
      fontSize: 12,
      marginTop: 0,
      fontWeight: 'bold',
    },
    tabStyle: {
      width: 80,
    },
    //  选项卡指示器的样式对象（选项卡底部的行）。
    indicatorStyle: {
      left: 95,
      width: 10,
      height: 3,
      backgroundColor: '#000',
    }
  }
});