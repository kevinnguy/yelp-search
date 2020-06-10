/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import List from './components/List';
import Map from './components/Map';
import SearchBar from './components/SearchBar';

import Business from './types/Business';

import searchYelp from './utils/search';

const mockData = [
  {
    id: 'SGRmnarrNuVEsAjYdEoA0w',
    name: 'El Farolito',
    rating: 4.0,
    review_count: 4917,
    location: {
      address1: '2779 Mission St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'JARsJVKLPgs_yC3cwDnp7g',
    name: 'La Taqueria',
    rating: 4.0,
    review_count: 4053,
    location: {
      address1: '2889 Mission St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'CS6NaMbTlzD-9yc3DBBrKw',
    name: 'El Burrito Express',
    rating: 4.0,
    review_count: 745,
    location: {
      address1: '1812 Divisadero St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'uCeCkdHHeaJnU4hGAe2sJQ',
    name: 'El Burrito Express',
    rating: 3.5,
    review_count: 867,
    location: {
      address1: '1601 Taraval St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'UjjNgzBFAVXF3iVXPVjH_Q',
    name: 'Pancho Villa Taqueria',
    rating: 4.0,
    review_count: 2626,
    location: {
      address1: '3071 16th St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'g0VCHer2uE5NLOEdblZuSw',
    name: 'Taqueria Canc\u00fan',
    rating: 4.0,
    review_count: 2035,
    location: {
      address1: '2288 Mission St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'EjFsWyScsqh-Fg2ozblYmw',
    name: 'La Corneta Taqueria',
    rating: 4.0,
    review_count: 1109,
    location: {
      address1: '2834 Diamond St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: '1dwJK21zm7cuhUKdROWJXQ',
    name: 'Taqueria Guadalajara',
    rating: 4.0,
    review_count: 950,
    location: {
      address1: '4798 Mission St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: '1ULAxKR5_7RWzQ4CRJD1hg',
    name: 'El Castillito',
    rating: 4.0,
    review_count: 849,
    location: {
      address1: '136 Church St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'VKPA24jl5g19ESyA9tN8Vw',
    name: 'El Rancho Grande',
    rating: 4.0,
    review_count: 366,
    location: {
      address1: '855 Divisadero St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'IiGIZOOdmhElfPYHQUZvnw',
    name: 'Casa Barajas',
    rating: 4.5,
    review_count: 66,
    location: {
      address1: '1849 Lincoln Way',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'cAaJQI_clNuEl5PRmrabGA',
    name: 'Gordo Taqueria',
    rating: 3.5,
    review_count: 724,
    location: {
      address1: '2252 Clement St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'BiTX6BWh3u24HwcrsipI8w',
    name: 'Taqueria Los Mayas',
    rating: 4.0,
    review_count: 324,
    location: {
      address1: '331 Clement St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: '2EGucgCJbPhkHjPTnZCzrg',
    name: 'El Farolito',
    rating: 4.0,
    review_count: 667,
    location: {
      address1: '4817 Mission St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'QDac11gEbAHlpBmOEJlPBg',
    name: 'Taqueria Dos Charros',
    rating: 3.5,
    review_count: 237,
    location: {
      address1: '55 Cambon Dr',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'tNvJuBDnUw5_BOYF3nz7xw',
    name: 'El Fuego',
    rating: 5.0,
    review_count: 12,
    location: {
      address1: '17TH St And Carolina St Or 1251 Thomas Ave',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: '7rUZnmRVyCpq4TrB9Brsiw',
    name: 'The Little Chihuahua',
    rating: 4.0,
    review_count: 1481,
    location: {
      address1: '292 Divisadero St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'imfAj62Nm0f7y0Cj_sbjsQ',
    name: 'The City Taqueria',
    rating: 3.5,
    review_count: 321,
    location: {
      address1: '1836 Divisadero St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'ZAPitG9126yVupKWHp54yA',
    name: 'Taqueria Los Coyotes',
    rating: 3.5,
    review_count: 912,
    location: {
      address1: '3036 16th St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  {
    id: 'rYgPik6nvr36L6Oxuxr3Lg',
    name: "Chino's Taqueria",
    rating: 4.0,
    review_count: 463,
    location: {
      address1: '3416 Balboa St',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
];

const App = () => {
  const [showMap, setShowMap] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const toggleView = () => {
    setShowMap(!showMap);
  };

  const onChangeBusiness = (text: string) => setSearchTerm(text);

  const onChangeLocation = (text: string) => setSearchLocation(text);

  const onPressRow = (business: Business) => {
    // navigate to another screen
  };

  const onSearch = async () => {
    console.warn('search', searchTerm, searchLocation);
    const response = await searchYelp(searchTerm, searchLocation);
    setData(response);
  };

  return (
    <SafeAreaView style={styles.map}>
      <SearchBar
        onChangeBusiness={onChangeBusiness}
        onChangeLocation={onChangeLocation}
        onSearch={onSearch}
        onToggle={toggleView}
      />
      {showMap ? (
        <Map data={data} />
      ) : (
        <List data={data} onPress={onPressRow} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
