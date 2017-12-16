import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Event from './components/event';


export default class App extends React.Component {
  schedule = [
    {
      name: 'Group Prayer',
      location: 'Schrodary house',
      timeStart: Date.parse('2017-12-16T08:00:00'),
      stopStart: Date.parse('2017-12-16T09:00:00')
    }
  ]
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.logo} source={require('./assets/cityVision.jpg')}></Image>
        </View>
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleTitle}>Upcoming Events</Text>
          <FlatList
            data={this.schedule}
            renderItem={({ item }) => <Event key={item.timeStart} info={item}/>}
          /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
  },
  scheduleTitle: {
    fontSize: 20,
    borderBottomWidth: 1.5,
    borderColor: '#d6d7da',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    alignItems: 'center',
  },
  scheduleContainer: {
    flex: 1,
    alignItems: 'stretch',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
