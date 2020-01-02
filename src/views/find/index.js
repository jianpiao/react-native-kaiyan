import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  RefreshControl
} from 'react-native';
import styles from './style';
const screenWidth = Dimensions.get('window').width;
import Cart1 from './components/cart1';
import Cart2 from './components/cart2';
import Cart3 from './components/cart3';
import Cart4 from './components/cart4';
import Cart5 from './components/cart5';

export default class FindScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotClassify: [
        { data: ['#广告', '#运动', '#旅行', '#记录', '#科技', '#游戏', '#搞笑', '#生活'] },
        { data: ['#剧情', '#创意', '#影视', '#音乐', '#开胃', '#动画', '#时尚', '#综艺'] },
      ],
      topicWeek: [
        { time: '03:04', title: '倾家荡产买了快猪肉竟然做了这道菜', type: '#开胃 / 开眼精选' },
        { time: '03:50', title: '8K 视觉盛宴: 抽象的色彩之美', type: '#创意 / 开眼精选' },
        { time: '02:50', title: '你与爆款视频间的距离, 只剩这支广告了', type: '#音乐 / 开眼精选' },
        { time: '03:52', title: '飚车预警 | 这里有一首关于取悦自己的歌', type: '#广告 / 开眼精选' },
        { time: '07:16', title: '听! 隔壁的人是不是[ 高潮 ]了?', type: '#生活 / 开眼精选' },
      ],
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
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={styles.body}>
            <Cart1 />
            {/* 热门分类 */}
            <Cart2 hotClassify={this.state.hotClassify} />
            {/* 专题策划 */}
            <Cart3 />
            {/* 本周榜单 */}
            <Cart4 topicWeek={this.state.topicWeek} />
            {/* 推荐主题 */}
            <Cart5 />
          </View>
        </ScrollView>
      </View >
    )
  }
}
