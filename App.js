import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header.js'
import AlbumList from './src/components/albumList.js'


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      headerText:"Albums!"
    }
  }
  render() {
    return (
      <View>
          <Header style={styles.textStyles} headerText={this.state.headerText} viewStyles={styles.viewStyles} />
        <AlbumList />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.22,
    elevation:2,
    position: "relative"
  },
  textStyles:{
    fontSize: 20,
  }
});
