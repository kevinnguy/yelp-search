import React from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Business from '../types/Business';

interface Props {
  data: Array<Business>;
  onPress: Function;
}

interface ItemProps {
  item: Business;
}

const renderEmptyState = () => (
  <Text style={[styles.text, styles.emptyState]}>No search results</Text>
);

const BusinessList: React.FC<Props> = ({data, onPress}) => {
  const renderItem = (props: ItemProps) => {
    const {item} = props;
    const {
      name,
      rating,
      review_count,
      location: {address1, city, state},
    } = item;

    return (
      <TouchableOpacity style={styles.row} onPress={() => onPress(item)}>
        <Text style={styles.text}>{`${name}
⭐️${rating} | 👀${review_count}
${address1}
${city}, ${state}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.flex}
      keyExtractor={(item) => `${item.id}`}
      data={data}
      ListEmptyComponent={renderEmptyState}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
  emptyState: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default BusinessList;
