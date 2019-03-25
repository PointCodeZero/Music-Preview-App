import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
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
          <View>
            <Card key={id} title={album.title}>
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
