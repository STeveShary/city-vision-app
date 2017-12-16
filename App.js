import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Event from './components/event';
import moment from 'moment';
import { getSchedule } from './data';
export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.logo} source={require('./assets/cityVision.jpg')}></Image>
        </View>
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleTitle}>Upcoming Events</Text>
          <FlatList
            data={getSchedule()}
            renderItem={({ item }) => <Event info={item}/>}
            keyExtractor={(item, index) => item.name + item.timeStart}
          /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 52,
  },
  scheduleTitle: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#0FBE7C',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    alignItems: 'center',
    borderBottomWidth: 5,
    borderColor: '#333333',
    paddingBottom: 10,
    marginBottom: 20,
  },
  scheduleContainer: {
    flex: 9,
    alignItems: 'stretch',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
