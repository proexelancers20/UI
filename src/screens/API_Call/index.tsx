import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import colors from '../../helper/colors';

interface ListProps {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const API_Call = () => {
  const [result, setResult] = useState<ListProps[]>([]);

  useEffect(() => {
    const callAPI = async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async data => {
        let List = await data.json();
        if (List.length > 0) {
          setResult(List);
        }
      });
    };
    callAPI();
  }, []);

  const RenderRowItem = (itemName: string, item: string | number) => {
    function alert(item: string | number) {
      throw new Error('Function not implemented.');
    }

    return (
      <Pressable onPress={() => {alert(item)}}
        style={{
          flexDirection: 'row',
          marginBottom: 5,
        }}>
        <View style={{flex: 0.2}}>
          <Text>{itemName}</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Text>{item}</Text>
        </View>
      </Pressable>
    );
  };

  const RenderItem = (item: ListProps) => {
    return (
      <View style={{padding: 15}}>
        {RenderRowItem('User Id :- ', item.userId)}
        {RenderRowItem('Title :- ', item.title)}
        {RenderRowItem('Body :- ', item.body)}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        testID='List_Data_FlatList'
        data={result}
        renderItem={({item}) => RenderItem(item)}
        initialNumToRender={20}
        keyExtractor={(_item, index) => index.toString()}
        ItemSeparatorComponent={() => {
          return <View style={styles.divide} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  divide: {height: 0.2, borderWidth: 0.2, borderColor: colors.black},
});

export default API_Call;
