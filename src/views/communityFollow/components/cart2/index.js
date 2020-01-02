import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

// 视频卡片
const cart = ({ data, showMoreVideo, _onLayoutVideo }) => {

  return (
    <View>
      {
        data.map((item, index) => (
          <View style={styles.card}>
            {/* 用户信息 */}
            <View style={styles.userinfo}>
              <Image
                source={require('../../../../static/image/1.jpg')}
                style={{ width: 40, height: 40, borderRadius: 20, }}
                resizeMode="cover"
              />
              <View style={styles.userinfoNameView}>
                <Text style={styles.userinfoNameTitle}>{item.name}</Text>
                <View style={styles.userinfopublishView}>
                  <Text style={styles.userinfopublishTitle}>发布: </Text>
                  <Text
                    style={styles.userinfopublishText}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >{item.publish}</Text>
                </View>
              </View>
              {/* <View style={styles.followView}>
                <Text style={styles.followTitle}>+关注</Text>
              </View> */}
            </View>
            {/* 内容 */}
            <View style={styles.contentView}>
              {/* 超时就显示两行的高度 */}
              <View style={{ height: item.numberOfLines == 2 ? 32 : 'auto', overflow: 'hidden' }}>
                <Text
                  style={styles.content}
                  onLayout={(e) => _onLayoutVideo(e, index)}
                >{item.content}
                </Text>
              </View>
              {
                item.numberOfLines == 2 ? (
                  <View style={styles.numberOfLinesView}>
                    <Text style={styles.numberOfLinesText} onPress={() => showMoreVideo(index)}>更多</Text>
                  </View>
                ) : null
              }
              {/* 显示图片或者视频 */}
              <View style={styles.videoView}>
                <ImageBackground
                  source={item.video.url}
                  style={{ flex: 1, height: 200, }}
                  imageStyle={{ borderRadius: 2, }}>
                  {/* <View style={styles.videoSelected}>
                    <Text style={styles.videoSelectedText}>社区精选</Text>
                  </View> */}
                  <View style={styles.videoPlay}>
                    <Fontisto name="play" size={30} color="#fff" />
                  </View>
                  <View style={styles.videoTime}>
                    <Text style={styles.videoTimeText}>{item.video.time}</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            {/* 类型 */}
            {/* {
              item.isJoin ? (
                <View style={styles.joinView}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.joinType}>{item.join_type}</Text>
                    <Text style={styles.joinDesc}>{item.join_desc}</Text>
                  </View>
                  <Text style={styles.joinAdd}>+ 立即参与</Text>
                </View>
              ) : null
            } */}
            {/* 点赞 */}
            <View style={styles.likesView}>
              <View style={styles.likes}>
                <MaterialCommunityIcons name="heart-outline" size={16} color="#aaa" />
                <Text style={styles.likesTitle}>{item.likes}</Text>
              </View>
              <View style={styles.likes}>
                <MaterialCommunityIcons name="comment-processing-outline" size={16} color="#aaa" />
                <Text style={styles.likesTitle}>{item.comment}</Text>
              </View>
              <View>
                <Text style={styles.likeDate}>{item.date}</Text>
              </View>
              <View>
                <Feather name="upload" size={16} color="#aaa" />
              </View>
            </View>
            {/* 评论 */}
            {/* <View style={styles.commentView}>
          <Text style={styles.commentUsername}>{item.comment_username}: </Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.commentUserContent}> {item.comment_user_content}</Text>
          </View>
        </View> */}
          </View>
        ))
      }
    </View>
  )
};


export default cart;