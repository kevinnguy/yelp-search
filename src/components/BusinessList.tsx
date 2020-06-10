import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

import BusinessRow from './BusinessRow';

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
  const renderItem = ({item}: ItemProps) => {
    return <BusinessRow business={item} onPress={onPress} />;
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
  emptyState: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default BusinessList;
