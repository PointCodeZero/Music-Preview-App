import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export class SearchText extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  onChange(value) {
    this.setState({ value });
  }

  onSubmitSearch() {
    const { submitSearch } = this.props;
    submitSearch(this.state.value);
  }

  render() {
    return (
      <View>
        <Input
          ref={input => (this.input = input)}
          onChangeText={event => this.onChange(event)}
          containerStyle={styles.container}
          placeholder="Artist name..."
        />
        <Button
          onPress={() => this.onSubmitSearch()}
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
