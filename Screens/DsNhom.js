import { ScrollView, FlatList, Text, View, StyleSheet } from 'react-native';

const data = [
  { name: 'Nguyễn Hữu Anh Tuấn', mssv: '47.01.104.228' },
  { name: 'Sơn Minh Phúc', mssv: '47.01.104.164' },
  { name: 'Phan Nguyễn Minh Phong', mssv: '47.01.104.159' },
  { name: 'Trần Ngọc Tường Vy', mssv: '47.01.104.247' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.mssv}>{item.mssv}</Text>
  </View>
);

const DsNhom = () => {
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.mssv}
      />

      <View>
        <Text style={styles.text}>Techs used in this app: react-native, firebase, navigation, useState, useEffect, route props, fetch, FireStore database...</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e7305b',
  },
  mssv: {
    fontSize: 16,
    color: '#999',
  },
  text: {
    color: 'purple',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default DsNhom;
