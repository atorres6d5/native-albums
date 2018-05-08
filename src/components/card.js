/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Card = ({ album }) => (
  <View style={styles.container}>
    <Text>I'm Card</Text>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
