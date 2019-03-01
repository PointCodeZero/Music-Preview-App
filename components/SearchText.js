import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export class SearchText extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  onChange(value) {
    this.setState({ value });
  }

  submitSearch() {
    this.state.value;
  }

  render() {
    return (
      <View>
        <Input
          onChangeText={event => this.onChange(event)}
          containerStyle={styles.container}
          placeholder="Artist name..."
        />
        <Button
          onPress={() => this.submitSearch()}
          containerStyle={styles.container}
          title="Search"
        />
      </View>
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
