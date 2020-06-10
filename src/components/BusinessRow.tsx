import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Business from '../types/Business';

interface Props {
  business: Business;
  onPress: Function;
}

const BusinessRow: React.FC<Props> = ({business, onPress}) => {
  const {
    name,
    rating,
    review_count,
    location: {address1, city, state},
  } = business;

  return (
    <TouchableOpacity style={styles.row} onPress={() => onPress(business)}>
      <Text style={styles.text}>{`${name}
⭐️${rating} | 👀${review_count}
${address1}
${city}, ${state}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default BusinessRow;
