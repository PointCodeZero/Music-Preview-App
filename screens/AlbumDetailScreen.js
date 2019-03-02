import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Detail'
  };

  componentDidMount() {
    const album = this.props.navigation.getParam('album', {});
  }

  render() {
    const album = this.props.navigation.getParam('album', {});
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Album title is {album.title}</Text>
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
