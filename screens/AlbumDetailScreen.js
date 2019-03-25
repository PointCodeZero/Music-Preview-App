import React from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import {
  Avatar,
  Text,
  Icon,
  Divider,
  ListItem,
  TouchableHighlight
} from 'react-native-elements';
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
    this.renderTracks = this.renderTracks.bind(this);
  }

  componentDidMount() {
    const album = this.props.navigation.getParam('album', {});
    this.setState({ tracks: [] });
    actions
      .getAlbumTracks(album.id)
      .then(tracks => this.setState({ tracks }))
      .catch(err => this.setState({ tracks: [] }));
  }

  async saveTrackToFavorite(album, track) {
    const favoriteAlbums = (await actions.retrieveData('favoriteAlbums')) || {};
    let albumData = favoriteAlbums[album.id];
    if (!albumData) {
      albumData = album;
    }
    if (!albumData['tracks']) {
      albumData['tracks'] = {};
    }
    albumData['tracks'][track.id] = track;
    favoriteAlbums[album.id] = albumData;
    const success = await actions.storeData('favoriteAlbums', favoriteAlbums);
    if (success) {
      actions.alerts(
        'Track Added',
        `Track ${track.title} from ${track.artist.name} was added to favorites!`
      );
    }
  }

  renderTracks(album) {
    const { tracks } = this.state;
    if (tracks && tracks.length > 0) {
      return tracks.map((track, index) => {
        return (
          <ListItem
            component={TouchableHighlight}
            key={index}
            title={track.title}
            leftIcon={{ name: 'play-arrow' }}
            leftIconOnPress={() => Linking.openURL(track.preview)}
            rightIcon={
              <Icon
                raised
                name="star"
                type="font-awesome"
                color="#f50"
                size={30}
                onPress={() => this.saveTrackToFavorite(album, track)}
              />
            }
          />
        );
      });
    }
  }

  render() {
    const album = this.props.navigation.getParam('album', {});
    const artist = this.props.navigation.getParam('artist', '');
    const { tracks } = this.state;
    if (album.id) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Avatar
                size="xlarge"
                rounded
                source={{ uri: album.cover_medium }}
              />
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.mainText} h4>
                {album.title}
              </Text>
              <Text style={styles.subText} h4>
                {artist}
              </Text>
              <Icon
                raised
                name="play"
                type="font-awesome"
                color="#f50"
                size={25}
                onPress={() => Linking.openURL(tracks[0].preview)}
              />
            </View>
          </View>
          <Divider style={{ backgroundColor: 'black' }} />
          <View>{this.renderTracks(album)}</View>
        </ScrollView>
      );
    } else {
      <View>
        <Text>Loading...</Text>
      </View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 8
  },
  avatar: {
    flex: 1,
    marginRight: 8
  },
  headerRight: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainText: {
    fontWeight: 'bold',
    color: '#3a3a3a',
    fontSize: 17
  },
  subText: {
    color: '#3a3a3a',
    fontSize: 17
  }
});
