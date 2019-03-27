import React from 'react';
import { FlatList, View } from 'react-native';
import { Card } from 'react-native-elements';

export class CardList extends React.Component {
  renderData() {
    const { data, imageKey, titleKey, bottomView } = this.props;

    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <Card
              key={index}
              title={item[titleKey]}
              image={{ uri: item[imageKey] }}
            >
              {bottomView(item)}
            </Card>
          );
        }}
      />
    );
  }

  render() {
    const { data } = this.props;
    if (data && data.length > 0) {
      return this.renderData();
    } else {
      return <View />;
    }
  }
}
