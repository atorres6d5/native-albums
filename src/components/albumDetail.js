/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  // StyleSheet,
} from 'react-native';

const AlbumDetail = ({ album }) => (
  <View>
    <Text>Title:{album.title}</Text>
  </View>
);

export default AlbumDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
