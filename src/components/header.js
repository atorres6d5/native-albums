/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Header = ({ style, headerText, viewStyles }) => (
  <View style={viewStyles}>
    <Text style={style}>{headerText}</Text>
  </View>

);

export default Header;
