import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SearchBar: React.FC<Props> = ({}) => (
  <View style={styles.container}>
    <View style={styles.flex}>
      <TextInput style={styles.textInput} placeholder={'Business'} />
      <TextInput style={styles.textInput} placeholder={'Current Location'} />
    </View>
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{'Filter'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{'View List'}</Text>
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
