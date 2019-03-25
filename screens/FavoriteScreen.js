import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import * as actions from '../actions';

export default class FavoriteScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites'
  };

  constructor() {
    super();
    this.state = {
      favoriteAlbums: undefined
    };
  }

  async getFavoriteAlbums() {
    const favoriteAlbums = await actions.retrieveData('favoriteAlbums');
    if (favoriteAlbums) {
      this.setState({ favoriteAlbums });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> favorite screen </Text>
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
