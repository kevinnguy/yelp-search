/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

import BusinessList from './components/BusinessList';
import Map from './components/Map';
import SearchBar from './components/SearchBar';

import Category from './types/Category';
import Business from './types/Business';
import Coordinates from './types/Coordinates';

import searchYelp from './utils/search';
import yelpCategories from './utils/categories';

const CATEGORY_ALL = 'all';

const App = () => {
  // const mapRef = React.createRef();

  const [showMap, setShowMap] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState(CATEGORY_ALL);

  const toggleView = () => setShowMap(!showMap);

  const onChangeBusiness = (text: string) => setSearchTerm(text);

  const onChangeLocation = (text: string) => setSearchLocation(text);

  const onChangeUserLocation = (coordinates: Coordinates) => {
    setUserLocation(coordinates);
  };

  const onPressBusiness = (business: Business) => {
    // navigate to another screen
  };

  const onSearch = async () => {
    const response = await searchYelp(searchTerm, searchLocation, userLocation);
    await setData(response);
  };

  const onPressFilter = () => setShowFilter(!showFilter);

  // Navigate to detail view

  return (
    <SafeAreaView style={styles.map}>
      <SearchBar
        onChangeBusiness={onChangeBusiness}
        onChangeLocation={onChangeLocation}
        onSearch={onSearch}
        onPressFilter={onPressFilter}
        onPressToggle={toggleView}
      />
      {showMap ? (
        <Map
          data={data}
          onChangeUserLocation={onChangeUserLocation}
          onPressCallout={onPressBusiness}
        />
      ) : (
        <BusinessList data={data} onPress={onPressBusiness} />
      )}
      {showFilter && (
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue: string) => setCategory(itemValue)}>
          <Picker.Item label="All Categories" value={CATEGORY_ALL} />
          {yelpCategories.map((categoryData: Category) => (
            <Picker.Item
              key={categoryData.alias}
              label={categoryData.title}
              value={categoryData.alias}
            />
          ))}
        </Picker>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  picker: {
    backgroundColor: '#dbdbdb',
    borderTopColor: 'gray',
  },
});

export default App;
