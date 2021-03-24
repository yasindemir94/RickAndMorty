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

const Home = ({navigation}) => {
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
      <TouchableOpacity
        onPress={() => navigation.navigate('EpisodeDetail', data.item)}>
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

  //console.log(data, 'data');

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
          marginVertical: 10,
        }}>
        {isData ? (
          <View style={{flex: 1, width: '100%', alignItems: 'center',marginBottom:10}}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#ABD4EA'}}>
              Rick {'&'} Morty Episodes
            </Text>
            <FlatList
              style={{width: '90%', marginTop: 10}}
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
