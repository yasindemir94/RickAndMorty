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

const EpisodeDetail = ({navigation, route}) => {
  const item = route.params;

  const [data, setData] = useState([]);
  const [isData, setisData] = useState(false);
  
  useEffect(() => {
    getData();
    return null;
  }, []);

  const getData = async () => {
    try {
      let response = await fetch(item.url);
      let responseData = await response.json();
      setData(responseData);
      setisData(true);
    } catch (error) {
      alert(error);
    }
  };

  let characters = data.characters;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
        }}>
        {isData ? (
          <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#ABD4EA'}}>
              {data.name}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Characters', characters)}
              style={{
                height: '10%',
                width: '90%',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth: 3,
                borderColor: '#ABD4EA',
                borderRadius: 20,
                flexDirection: 'row',
                padding: 10,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{color: '#32CD32', fontSize: 20, fontWeight: 'bold'}}>
                Characters
              </Text>
              <IconFA name="angle-right" size={44} color={'#FFF700'} />
            </TouchableOpacity>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#0f0" />
        )}
      </View>
    </SafeAreaView>
  );
};

export default EpisodeDetail;
