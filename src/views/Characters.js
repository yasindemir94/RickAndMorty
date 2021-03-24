import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import IconFA from 'react-native-vector-icons/FontAwesome5';

const Characters = ({navigation, route}) => {
  const urls = route.params;

  const [char, setChar] = useState([]);
  const [isChar, setisChar] = useState(false);

  useEffect(() => {
    getChar();
    return null;
  }, []);

  const getChar = async () => {
    try {
      let response = await Promise.all(urls.map(u => fetch(u)));
      let responseData = await Promise.all(response.map(u => u.json()));
      setChar(responseData);
      setisChar(true);
    } catch (error) {
      alert(error);
    }
  };

  const renderItem = data => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('CharacterDetail', data.item)}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
            borderColor: '#ABD4EA',
            borderRadius: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={{color: '#32CD32', fontSize: 20, fontWeight: 'bold'}}>
              {data.item.name}
            </Text>
          </View>

          <IconFA name="angle-right" size={44} color={'#FFF700'} />
        </View>
      </TouchableOpacity>
    );
  };

  const itemSeparatorComponent = () => {
    return (
      <View
        style={{
          marginVertical: 5,
          height: 1,
          width: '100%',
          backgroundColor: '#fff',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
        }}>
        {isChar ? (
          <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#ABD4EA'}}>
              Characters
            </Text>
            <FlatList
              style={{width: '90%', marginTop: 10}}
              data={char}
              ItemSeparatorComponent={itemSeparatorComponent}
              renderItem={item => renderItem(item)}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        ) : (
          <ActivityIndicator size="large" color="#0f0" />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Characters;
