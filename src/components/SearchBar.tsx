import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  onChangeBusiness: Function;
  onChangeLocation: Function;
  onPressFilter: Function;
  onPressToggle: Function;
  onSearch: Function;
}

const SearchBar: React.FC<Props> = ({
  onChangeBusiness,
  onChangeLocation,
  onPressFilter,
  onPressToggle,
  onSearch,
}) => (
  <View style={styles.container}>
    <View style={styles.flex}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeBusiness}
        onSubmitEditing={onSearch}
        placeholder={'Restaurants, cleaners, etc.'}
        returnKeyType="search"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeLocation}
        onSubmitEditing={onSearch}
        placeholder={'Current Location'}
        returnKeyType="search"
      />
    </View>
    <View>
      <TouchableOpacity style={styles.button} onPress={onPressFilter}>
        <Text style={styles.buttonText}>{'Filter'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressToggle}>
        <Text style={styles.buttonText}>{'Toggle View'}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  flex: {
    flex: 1,
  },
  textInput: {
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginRight: 15,
    marginBottom: 10,
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

export default SearchBar;
