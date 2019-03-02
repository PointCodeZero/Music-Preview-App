import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import * as actions from '../actions';

export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Detail'
  };

  constructor() {
    super();
    this.state = {
      tracks: []
    };
  }

  componentDidMount() {
    const album = this.props.navigation.getParam('album', {});
    this.setState({ tracks: [] });
    actions
      .getAlbumTracks(album.id)
      .then(tracks => this.setState({ tracks }))
      .catch(err => this.setState({ tracks: [] }));
  }

  render() {
    const album = this.props.navigation.getParam('album', {});
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Album title is {album.title}</Text>
          <Text>Album title is {this.state.tracks.title}</Text>
        </View>
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
