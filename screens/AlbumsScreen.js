import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { CardList } from '../components/CardList';
import { SearchText } from '../components/SearchText';
import * as actions from '../actions';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums'
  };

  constructor() {
    super();
    this.state = {
      albums: [],
      isFetching: false
    };
    this.searchTracks = this.searchTracks.bind(this);
    this.renderAlbumView = this.renderAlbumView.bind(this);
    this.renderBottomNavigation = this.renderBottomNavigation.bind(this);
  }

  searchTracks(artist) {
    this.setState({ albums: [], isFetching: true });
    actions
      .searchTracks(artist)
      .then(albums => this.setState({ albums, isFetching: false }))
      .catch(err => this.setState({ albums: [], isFetching: false }));
  }

  renderBottomNavigation() {
    return (
      <View style={styles.albumMenu}>
        <Icon
          onPress={() => {}}
          raised
          name="play"
          type="font-awesome"
          color="#f50"
          size={30}
        />
        <Icon
          onPress={() => {}}
          raised
          name="info"
          type="font-awesome"
          color="#f50"
          size={30}
        />
        <Icon
          onPress={() => {}}
          raised
          name="thumbs-up"
          type="font-awesome"
          color="#f50"
          size={30}
        />
      </View>
    );
  }

  renderAlbumView() {
    const { albums, isFetching } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchText submitSearch={this.searchTracks} />
        {albums.length > 0 && !isFetching && (
          <CardList
            data={albums}
            imageKey={'cover_big'}
            titleKey={'title'}
            buttonText="Details"
            bottomView={this.renderBottomNavigation}
          />
        )}
        {albums.length === 0 && isFetching && <Text>Loading Albums...</Text>}
      </ScrollView>
    );
  }

  render() {
    return this.renderAlbumView();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  albumMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
