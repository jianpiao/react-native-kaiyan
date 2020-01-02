import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  RefreshControl
} from 'react-native';
import styles from './style';
import Cart1 from './components/cart1';
import Cart2 from './components/cart2';
import Cart3 from './components/cart3';
import Cart4 from './components/cart4';
import Cart5 from './components/cart5';
import Cart6 from './components/cart6';

export default class RecommentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: Array.from(Array(20), (item, index) => {
        return `推荐${index}`
      }),
      refreshing: false,
      timer: null
    }
  }


  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.state.timer = setTimeout(() => {
      clearTimeout(this.state.timer)
      this.setState({
        refreshing: false,
        timer: this.state.timer,
      });
    }, 1000);
  }

  //  页面
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={styles.body}>
            {/* 每日开眼精选 */}
            <Cart1 />
            {/* 专题策划 */}
            <Cart2 />
            {/* 精选社区 */}
            <Cart3 />
            {/* 五分钟新知 */}
            <Cart4 />
            {/* 创作主题 */}
            <Cart5 />
            {/* 讨论话题 */}
            <Cart6 />
          </View>
        </ScrollView>
      </View >
    )
  }
}
