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
import Header from './components/header/index';
import Cart1 from './components/cart1/index';
import Cart2 from './components/cart2/index';


export default class CommunityFollow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: '酶食间食物摄影',
          publish: '杭州市',
          content: '山楂红茶      阿斯顿发大是大非爱的色放大发送到发的发生大幅阿斯蒂芬爱的色放阿德法撒旦发射点发阿斯蒂芬阿萨德发送到分阿萨德噶三个大撒旦嘎帅得过按时到岗按时到岗按时到岗',
          images: [require('../../static/image/1.jpg')],
          likes: 195,
          comment: 2,
          comment_username: '硕仔',
          comment_user_content: '大山楂',
          date: '2019/10/23',
          isJoin: true,
          join_type: '# 开胃',
          join_desc: '用美食唤醒沉睡的你味蕾',
        },
        {
          name: '璨丰_',
          publish: '合肥市',
          content: '有一个深秋',
          images: [require('../../static/image/1.jpg'), require('../../static/image/1.jpg')],
          likes: 152,
          comment: 23,
          comment_username: '长烟',
          comment_user_content: '大山楂',
          date: '2019/10/21',
          isJoin: true,
          join_type: '# 最不想破坏的美景',
          join_desc: '开眼 x 雀巢咖啡 [ 环保出行计划 ]',
        },
        {
          name: 'SIRIUSS',
          publish: '澳门特别行政区',
          content: '孤独的祷告',
          images: [require('../../static/image/1.jpg'), require('../../static/image/1.jpg'), require('../../static/image/1.jpg'),],
          likes: 154,
          comment: 8,
          comment_username: 'SIRIUSS',
          comment_user_content: '谢谢!😊',
          date: '2019/10/21',
          isJoin: true,
          join_type: '# 开眼Wanderlust摄影展',
          join_desc: '[ 定位 ] 开眼Wanderlust摄影展参展作品征集',
        },
        {
          name: 'SMALLZIP',
          publish: '东莞',
          content: '无聊的代码',
          images: [require('../../static/image/1.jpg'), require('../../static/image/1.jpg'), require('../../static/image/1.jpg'), require('../../static/image/1.jpg')],
          likes: 13,
          comment: 45,
          comment_username: '小飘飘',
          comment_user_content: '无赖的你呀!😊',
          date: '2019/11/13',
          isJoin: true,
          join_type: '# 特别的一天',
          join_desc: '每日征集特别展览',
        },
        {
          name: 'SMALLZIP',
          publish: '东莞',
          content: '无聊的代码',
          images: [require('../../static/image/1.jpg'), require('../../static/image/1.jpg'), require('../../static/image/1.jpg'), require('../../static/image/1.jpg'), require('../../static/image/1.jpg')],
          likes: 13,
          comment: 45,
          comment_username: '小飘飘',
          comment_user_content: '无赖的你呀!😊',
          date: '2019/11/13',
          isJoin: true,
          join_type: '# 特别的一天',
          join_desc: '每日征集特别展览',
        },
      ],
      vidoeList: [
        {
          name: '[影少]启示录',
          publish: '是你干的吧! 电影片场被砸场的倒霉的摄影师',
          content: '是你干的吧! 电影片场被砸场的倒霉的摄影师... <速度与激情特别行动>搞笑片场',
          video: {
            url: require('../../static/image/1.jpg'),
            time: '06:11'
          },
          likes: 195,
          comment: 2,
          date: '2019/10/23',
        },
        {
          name: '硬汉的快餐厨房',
          publish: '零添加纯果汁法式桔子软糖, 家里水果变得特别多,利用水果做好吃的水果汁',
          content: '零添加纯果汁法式桔子软糖, 家里水果变得特别多,利用水果做好吃的水果汁,听起来高端但是做起来很简单,用这种方法各种水果都可以做成软糖,还能当作小礼物送人,你们快来试试看吧!',
          video: {
            url: require('../../static/image/1.jpg'),
            time: '02:36'
          },
          likes: 195,
          comment: 2,
          date: '2019/10/23',
        },
        {
          name: '[影少]启示录',
          publish: '是你干的吧! 电影片场被砸场的倒霉的摄影师',
          content: '是你干的吧! 电影片场被砸场的倒霉的摄影师... <速度与激情特别行动>搞笑片场',
          video: {
            url: require('../../static/image/1.jpg'),
            time: '06:11'
          },
          likes: 195,
          comment: 2,
          date: '2019/10/23',
        },
        {
          name: '硬汉的快餐厨房',
          publish: '零添加纯果汁法式桔子软糖, 家里水果变得特别多,利用水果做好吃的水果汁',
          content: '零添加纯果汁法式桔子软糖, 家里水果变得特别多,利用水果做好吃的水果汁,听起来高端但是做起来很简单,用这种方法各种水果都可以做成软糖,还能当作小礼物送人,你们快来试试看吧!',
          video: {
            url: require('../../static/image/1.jpg'),
            time: '02:36'
          },
          likes: 195,
          comment: 2,
          date: '2019/10/23',
        },
        {
          name: '[影少]启示录',
          publish: '是你干的吧! 电影片场被砸场的倒霉的摄影师',
          content: '是你干的吧! 电影片场被砸场的倒霉的摄影师... <速度与激情特别行动>搞笑片场',
          video: {
            url: require('../../static/image/1.jpg'),
            time: '06:11'
          },
          likes: 195,
          comment: 2,
          date: '2019/10/23',
        },
        {
          name: '硬汉的快餐厨房',
          publish: '零添加纯果汁法式桔子软糖, 家里水果变得特别多,利用水果做好吃的水果汁',
          content: '零添加纯果汁法式桔子软糖, 家里水果变得特别多,利用水果做好吃的水果汁,听起来高端但是做起来很简单,用这种方法各种水果都可以做成软糖,还能当作小礼物送人,你们快来试试看吧!',
          video: {
            url: require('../../static/image/1.jpg'),
            time: '02:36'
          },
          likes: 195,
          comment: 2,
          date: '2019/10/23',
        },
        {
          name: '[影少]启示录',
          publish: '是你干的吧! 电影片场被砸场的倒霉的摄影师',
          content: '是你干的吧! 电影片场被砸场的倒霉的摄影师... <速度与激情特别行动>搞笑片场',
          video: {
            url: require('../../static/image/1.jpg'),
            time: '06:11'
          },
          likes: 195,
          comment: 2,
          date: '2019/10/23',
        },
        {
          name: '硬汉的快餐厨房',
          publish: '零添加纯果汁法式桔子软糖, 家里水果变得特别多,利用水果做好吃的水果汁',
          content: '零添加纯果汁法式桔子软糖, 家里水果变得特别多,利用水果做好吃的水果汁,听起来高端但是做起来很简单,用这种方法各种水果都可以做成软糖,还能当作小礼物送人,你们快来试试看吧!',
          video: {
            url: require('../../static/image/1.jpg'),
            time: '02:36'
          },
          likes: 195,
          comment: 2,
          date: '2019/10/23',
        },
      ],
      refreshing: false,
      timer: null
    }
  }

  // 计算内容文本的高度
  _onLayout = (e, index) => {
    if (e.nativeEvent.layout.height > 32) {
      this.state.list[index].numberOfLines = 2
      this.setState({
        list: this.state.list
      })
    }
  }

  // 显示更多
  showMore = (index) => {
    this.state.list[index].numberOfLines = null;
    this.setState({
      list: this.state.list
    })
  }

  _onLayoutVideo = (e, index) => {
    if (e.nativeEvent.layout.height > 32) {
      this.state.vidoeList[index].numberOfLines = 2
      this.setState({
        vidoeList: this.state.vidoeList
      })
    }
  }

  showMoreVideo = (index) => {
    this.state.vidoeList[index].numberOfLines = null;
    this.setState({
      vidoeList: this.state.vidoeList
    })
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
          }
        >
          <View style={styles.body}>
            {/* 头部 */}
            <Header />

            {/* 用户推荐 */}
            {/* <Cart1
              list={this.state.list}
              _onLayout={this._onLayout}
              showMore={this.showMore}
            /> */}

            {/* 推荐视频 */}
            <Cart2
              data={this.state.vidoeList}
              _onLayoutVideo={this._onLayoutVideo}
              showMoreVideo={this.showMoreVideo}
            />
          </View>
        </ScrollView>
      </View >
    )
  }
}
