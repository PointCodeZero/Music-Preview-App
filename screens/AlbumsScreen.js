import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CardList } from '../components/CardList';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums'
  };

  constructor() {
    super();
    this.state = {
      albums: [
        {
          title: 'Meteora',
          image:
            'https://cdn.shopify.com/s/files/1/0815/8995/products/linkin_park_meteora_grande.jpg?v=1428823373'
        },
        {
          title: 'Meteora',
          image:
            'https://cdn.shopify.com/s/files/1/0815/8995/products/linkin_park_meteora_grande.jpg?v=1428823373'
        },
        {
          title: 'Meteora',
          image:
            'https://cdn.shopify.com/s/files/1/0815/8995/products/linkin_park_meteora_grande.jpg?v=1428823373'
        },
        {
          title: 'Meteora',
          image:
            'https://cdn.shopify.com/s/files/1/0815/8995/products/linkin_park_meteora_grande.jpg?v=1428823373'
        }
      ]
    };
  }

  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <CardList
          data={albums}
          imageKey={'image'}
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
