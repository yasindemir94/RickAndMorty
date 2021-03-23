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

const Home = () => {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    getEpisodes();
  }, []);

  const getEpisodes = async () => {
    try {
      let response = await fetch('https://rickandmortyapi.com/api/episode');
      let responseData = await response.json();
      setData(responseData);
      setIsData(true);
    } catch (error) {
      alert(error);
    }
  };

  const renderItem = data => {
    return (
      <TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingRight: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1}}>
            <Text style={{color: '#ABD4EA', fontSize: 16, fontWeight: 'bold'}}>
              {data.item.name}
            </Text>
            <Text style={{color: '#FFF700', fontSize: 16, fontWeight: 'bold'}}>
              {data.item.episode}
            </Text>
            <Text style={{color: '#98C439', fontSize: 16, fontWeight: 'bold'}}>
              {data.item.air_date}
            </Text>
          </View>

          <IconFA name="angle-right" size={36} color={'#FFF700'} />
        </View>
      </TouchableOpacity>
    );
  };

  //console.log(data, 'data');

  const itemSeparatorComponent = () => {
    return (
      <View
        style={{
          marginVertical: 10,
          height: 1,
          width: '100%',
          backgroundColor: '#333',
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
          marginVertical: 10,
        }}>
        {isData ? (
          <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
            <View>
              <Text
                style={{fontSize: 24, fontWeight: 'bold', color: '#ABD4EA'}}>
                Rick {'&'} Morty Bölümleri
              </Text>
            </View>
            <FlatList
              style={{width: '90%'}}
              data={data.results}
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

export default Home;
