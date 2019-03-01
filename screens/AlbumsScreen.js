import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>All Almbums</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
