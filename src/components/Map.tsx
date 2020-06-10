import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

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
  locations: Array<Location>;
}

const Map: React.FC<Props> = ({locations}) => (
  <MapView showsUserLocation showsMyLocationButton style={styles.flex}>
    {locations.map(({coordinate, name}) => (
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
