import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import Business from '../types/Business';

interface Props {
  // ref: React.ReactNode;
  data: Array<Business>;
  onChangeUserLocation: Function;
  onPressCallout: Function;
}

const Map: React.FC<Props> = ({
  // ref,
  data,
  onChangeUserLocation,
  onPressCallout,
}) => (
  <MapView
    showsUserLocation
    showsMyLocationButton
    style={styles.flex}
    onUserLocationChange={({nativeEvent: {coordinate}}) =>
      onChangeUserLocation(coordinate)
    }>
    {data.map((business) => {
      const {id, name, rating, review_count, coordinates} = business;

      return (
        <Marker
          key={id}
          coordinate={coordinates}
          title={name}
          description={`⭐️${rating} | 👀${review_count}`}
          onCalloutPress={() => onPressCallout(business)}
        />
      );
    })}
  </MapView>
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

// export default React.forwardRef((props, ref) => <Map ref={ref} {...props} />);
export default Map;
