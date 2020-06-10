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
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import BusinessList from './components/BusinessList';
import Map from './components/Map';
import SearchBar from './components/SearchBar';

import Category from './types/Category';
import Business from './types/Business';
import Coordinates from './types/Coordinates';

import searchYelp from './utils/search';
import yelpCategories, {CATEGORY_ALL} from './utils/categories';
import BusinessRow from './components/BusinessRow';

const App = () => {
  const [showMap, setShowMap] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [businessDetails, setBusinessDetails] = useState();

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [category, setCategory] = useState(CATEGORY_ALL);

  const navigatePop = () => setBusinessDetails(null);

  const toggleView = () => setShowMap(!showMap);

  const onChangeBusiness = (text: string) => setSearchTerm(text);

  const onChangeLocation = (text: string) => setSearchLocation(text);

  const onChangeUserLocation = (coordinates: Coordinates) => {
    setUserLocation(coordinates);
  };

  const onPressBusiness = (business: Business) => {
    // navigate to another screen
    setBusinessDetails(business);
  };

  const onSearch = async () => {
    const response = await searchYelp(
      searchTerm,
      searchLocation,
      category,
      userLocation,
    );
    await setData(response);
  };

  const onPressFilter = () => {
    if (showFilter) {
      // closing filter, make another search
      onSearch();
    }

    setShowFilter(!showFilter);
  };

  // Navigate to detail view
  // ideally this should be a separate file
  // ex: src/screens/Details.tsx
  // navigation should be managed with a lib (react-navigation, etc.)
  if (businessDetails) {
    const {photos = []} = businessDetails;
    return (
      <SafeAreaView style={[styles.flex, styles.details]}>
        <TouchableOpacity style={styles.button} onPress={navigatePop}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <BusinessRow business={businessDetails} onPress={null} />
        {photos.map((uri) => (
          <Image style={styles.flex} key={uri} source={{uri}} />
        ))}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.flex}>
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
  flex: {
    flex: 1,
  },
  details: {
    margin: 15,
  },
  picker: {
    backgroundColor: '#dbdbdb',
    borderTopColor: 'gray',
  },
  button: {
    height: 40,
    width: 100,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
