/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
} from 'react-native';
import Card from './card.js'
import CardSection from './cardSection.js'
import Button from './button.js'

const AlbumDetail = ({ album }) =>{
  const {title, artist, thumbnail_image, image, url } = album
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{uri:thumbnail_image}} style={thumbnailStyle} />
        </View>
        <View sytle={headerContentStyle}>
          <Text style={headerTextStyle}>{artist}</Text>
          <Text>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{uri: image}} style={ imageStyle }/>
      </CardSection>

      <CardSection>
        <Button onPress={()=>Linking.openURL(url)}>Buy Now</Button>
      </CardSection>

    </Card>
  );

}

export default AlbumDetail;

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection:"column",
    justifyContent: "space-around"
  },
  headerTextStyle:{
    fontSize:18
  },
  thumbnailStyle:{
    height:50,
    width:50
  },
  thumbnailContainerStyle:{
    justifyContent:"center",
    alignItems:"center",
    marginRight:10,
    marginLeft:10
  },
  imageStyle:{
    height:300,
    flex: 1,
    width: null
  },


});
