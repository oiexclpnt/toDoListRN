import { StyleSheet, View, FlatList, Text } from 'react-native';
import React, { useState } from 'react';
import Header from "./components/header";
import ListItem from './components/list';
import Form from './components/form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить продукты", key: "1" },
    { text: "Помыть посуду", key: "2" },
    { text: "Постирать", key: "3" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list,
      ];
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key );
    });
  };

  return (
    <View style={styles.header}>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList 
          data={listOfItems}
          renderItem={({ item }) => 
            <ListItem el={item} deleteHandler={deleteHandler} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#524E4D',
    height: '100%',
    width: '100%',
  },
});