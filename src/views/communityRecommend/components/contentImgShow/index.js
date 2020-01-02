import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import styles from './style';

/**
 * 显示图片的类型
 * @param {array} images - 显示的图片数组
 */
const contentImgShow = ({ images }) => {
  const len = images.length;
  switch (len) {
    case 1:
      return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <ImageBackground
            source={images[0]}
            style={{ flex: 1, height: 200, }}
            imageStyle={{ borderRadius: 5, }}>
            <View style={{ alignSelf: 'flex-end', borderColor: '#f1f1f1', borderWidth: .3, padding: 3, marginRight: 5, marginTop: 5, borderRadius: 3, backgroundColor: 'rgba(0,0,0,.5)' }}>
              <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>社区精选</Text>
            </View>
          </ImageBackground>
        </View>
      )
    case 2:
      return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
          <ImageBackground
            source={images[0]}
            style={{ flex: 1, height: 200, marginRight: 2, }}
            imageStyle={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }}></ImageBackground>
          <ImageBackground
            source={images[1]}
            style={{ flex: 1, height: 200, marginLeft: 2, }}
            imageStyle={{ borderTopRightRadius: 5, borderBottomRightRadius: 5, }}>
            <View style={{ alignSelf: 'flex-end', borderColor: '#f1f1f1', borderWidth: .3, padding: 3, marginRight: 5, marginTop: 5, borderRadius: 3, backgroundColor: 'rgba(0,0,0,.5)' }}>
              <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>社区精选</Text>
            </View>
          </ImageBackground>
        </View>
      )
    case 3:
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            source={images[0]}
            style={{ flex: 1, height: 200, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, marginRight: 2, }}
            resizeMode="cover"
          />
          <View style={{ flex: 1, marginLeft: 2, }}>
            <ImageBackground
              source={images[1]}
              style={{ flex: 1, height: 98, marginBottom: 2, }}
              imageStyle={{ borderTopRightRadius: 5, }}></ImageBackground>
            <ImageBackground
              source={images[2]}
              style={{ flex: 1, height: 98, marginTop: 2, }}
              imageStyle={{ borderBottomRightRadius: 5, }}></ImageBackground>
          </View>
        </View>
      )
    case 4:
      return (
        <View style={{ flex: 1, flexDirection: 'row', }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginRight: 2, }}>
              <ImageBackground
                source={images[0]}
                style={{ flex: 1, height: 98, marginBottom: 2, }}
                imageStyle={{ borderTopLeftRadius: 5, }}></ImageBackground>
              <ImageBackground
                source={images[1]}
                style={{ flex: 1, height: 98, marginTop: 2, }}
                imageStyle={{ borderBottomLeftRadius: 5, }}></ImageBackground>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 2, }}>
            <ImageBackground
              source={images[2]}
              style={{ flex: 1, height: 98, marginBottom: 2, }}
              imageStyle={{ borderTopRightRadius: 5, }}>
              <View style={{ alignSelf: 'flex-end', borderColor: '#f1f1f1', borderWidth: .3, padding: 3, marginRight: 5, marginTop: 5, borderRadius: 3, backgroundColor: 'rgba(0,0,0,.5)' }}>
                <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>社区精选</Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={images[3]}
              style={{ flex: 1, height: 98, marginTop: 2, }}
              imageStyle={{ borderBottomRightRadius: 5, }}></ImageBackground>
          </View>
        </View>
      )
    default:
      return (
        <View style={{ flex: 1, flexDirection: 'row', }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginRight: 2, }}>
              <ImageBackground
                source={images[0]}
                style={{ flex: 1, height: 98, marginBottom: 2, }}
                imageStyle={{ borderTopLeftRadius: 5, }}></ImageBackground>
              <ImageBackground
                source={images[1]}
                style={{ flex: 1, height: 98, marginTop: 2, }}
                imageStyle={{ borderBottomLeftRadius: 5, }}></ImageBackground>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 2, }}>
            <ImageBackground
              source={images[2]}
              style={{ flex: 1, height: 98, marginBottom: 2, }}
              imageStyle={{ borderTopRightRadius: 5, }}>
              <View style={{ alignSelf: 'flex-end', borderColor: '#f1f1f1', borderWidth: .3, padding: 3, marginRight: 5, marginTop: 5, borderRadius: 3, backgroundColor: 'rgba(0,0,0,.5)' }}>
                <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>社区精选</Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={images[3]}
              style={{ flex: 1, height: 98, marginTop: 2, }}
              imageStyle={{ borderBottomRightRadius: 5, }}>
              <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.2)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}>+{images.length - 4}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      )
  }
}


export default contentImgShow;