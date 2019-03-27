import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, ListItem } from 'react-native-elements';
import * as actions from '../actions';
import _ from 'lodash';

export default class FavoriteScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites'
  };

  constructor() {
    super();
    this.state = {
      favoriteAlbums: undefined
    };
    this.renderFavoriteAlbums = this.renderFavoriteAlbums.bind(this);
  }

  componentWillMount() {
    this.getFavoriteAlbums();
  }

  async getFavoriteAlbums() {
    const favoriteAlbums = await actions.retrieveData('favoriteAlbums');
    if (favoriteAlbums) {
      this.setState({ favoriteAlbums });
    }
  }

  renderFavoriteAlbums() {
    const { favoriteAlbums } = this.state;
    if (favoriteAlbums) {
      return _.map(favoriteAlbums, (album, id) => {
        return (
          <View key={id}>
            <Card title={album.title}>
              <Button
                title="Delete Album"
                raised
                backgroundColor="#f50"
                name="trash"
                onPress={() => {}}
              />
            </Card>
          </View>
        );
      });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderFavoriteAlbums()}
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
