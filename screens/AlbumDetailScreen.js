import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { CardList } from '../components/CardList';
import { SearchText } from '../components/SearchText';
import * as actions from '../actions';

export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Detail'
  };

  render() {
    const album = this.props.navigation.getParam('album', {});
    return <Text>Album title is {album.title}</Text>;
  }
}
