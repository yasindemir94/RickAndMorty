import React from 'react';
import {View, Text, Image} from 'react-native';

const CharacterDetail = ({navigation, route}) => {
  const details = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', margin: 20}}>
      <Image source={{uri: details.image}} style={{width: 300, height: 300}} />
      <Text
        style={{
          color: '#32CD32',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        {details.name}
      </Text>
      <Text
        style={{
          color: '#32CD32',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        {details.status}
      </Text>
      <Text
        style={{
          color: '#32CD32',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        {details.species}
      </Text>
      <Text
        style={{
          color: '#32CD32',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        {details.gender}
      </Text>
      <Text
        style={{
          color: '#32CD32',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        {details.origin.name}
      </Text>
      <Text
        style={{
          color: '#32CD32',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        {details.location.name}
      </Text>
    </View>
  );
};

export default CharacterDetail;
