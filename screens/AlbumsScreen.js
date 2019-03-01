import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
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
      albums: null
    };
    actions.searchTracks('angra').then(albums => this.setState({ albums }));
  }

  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchText />
        <CardList
          data={albums}
          imageKey={'cover_big'}
          titleKey={'title'}
          buttonText="Details"
        />
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
