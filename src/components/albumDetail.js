/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  // StyleSheet,
} from 'react-native';
import Card from './card.js'
import CardSection from './cardSection.js'

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <Text>{album.title}</Text>
    </CardSection>
  </Card>
);

export default AlbumDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
