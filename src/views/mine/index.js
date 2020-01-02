import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default class Page4Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      timer: null,
      footList: [
        { title: '我的关注' },
        { title: '观看记录' },
        { title: '通知开关' },
        { title: '我的徽章' },
        { title: '意见反馈' },
        { title: '我要投稿' },
      ]
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
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: 10, }}>
              <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={20} color="#666" />
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
              <View style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 35, borderWidth: 1, borderColor: '#ccc', }}>
                <View style={{ width: 66, height: 66, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e9e9e9', borderRadius: 33, margin: 4 }}>
                  <Entypo name="eye" size={50} color="#777" />
                </View>
              </View>
              <Text style={{ color: '#666', fontSize: 12, marginTop: 10 }}>点击登录即可评论及发布内容</Text>
            </View>
            <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialCommunityIcons name="heart-outline" size={18} color="#666" />
                <Text style={{ marginLeft: 10, color: '#666' }}>收藏</Text>
              </View>
              <View style={{ width: .5, height: 40, backgroundColor: '#eee' }}></View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Feather name="download" size={16} color="#666" />
                <Text style={{ marginLeft: 10, color: '#666' }}>缓存</Text>
              </View>
            </View>

            <View style={{ flex: 1, borderTopColor: '#eee', borderTopWidth: .3, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', }}>
              {
                this.state.footList.map((item, index) => (
                  <View style={{ height: 60, justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ color: '#666' }}>{item.title}</Text>
                  </View>
                ))
              }
              <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ color: '#aaa', fontSize: 12 }}>Version 5.10.1.561</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View >
    )
  }
}
