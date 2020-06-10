import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import Business from '../types/Business';

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Location {
  id: string;
  name: string;
  alias: string;
  rating: number;
  coordinate: Coordinate;
}

interface Props {
  data: Array<Business>;
}

const Map: React.FC<Props> = ({data}) => (
  <MapView
    showsUserLocation
    showsMyLocationButton
    style={styles.flex}
    maxZoomLevel={13}>
    {data.map(({coordinate, name}) => (
      <Marker coordinate={coordinate} title={name} />
    ))}
  </MapView>
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default Map;
