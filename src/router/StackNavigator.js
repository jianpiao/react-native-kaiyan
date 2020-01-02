import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import tabNav from './TabNavBottom';

const headerStyle = {
  backgroundColor: '#fff',
  elevation: 0,
  borderBottomColor: '#eee',
  borderBottomWidth: 0.8
}


// 初始化StackNavigator
const MyApp = createStackNavigator({
  tabNav: {
    screen: tabNav,
    navigationOptions: {
      header: null,
    }
  },
  // //  新闻详情页面
  // NewsView: {
  //   screen: newsViewScreen,
  //   navigationOptions: {
  //     headerStyle: headerStyle,
  //   }
  // },
}, {
  // transitionConfig: TransitionConfiguration

  // 设置打开应用默认显示的页面
  // initialRouteName: tabNav,
});

export default createAppContainer(MyApp)