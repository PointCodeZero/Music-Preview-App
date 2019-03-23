import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as actions from '../actions';

export default class StorageScreen extends React.Component {
  static navigationOptions = {
    title: 'Storage'
  };

  async storeData() {
    const data = {
      value: 'Some Data'
    };
    const value = await actions.storeData('someKey', data);
    if (value) {
      console.log(value);
    }
  }

  async retriveData() {}

  async removeData() {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hello!</Text>

        <Button
          title="store data"
          onPress={() => {
            this.storeData();
          }}
        />
        <Button
          title="retrive data"
          onPress={() => {
            this.retriveData();
          }}
        />
        <Button
          title="remove data"
          onPress={() => {
            this.removeData();
          }}
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
