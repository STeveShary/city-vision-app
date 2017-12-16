import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    renderDateTime(date) {
        return new moment(date).format("dddd, MMMM Do YYYY, h:mmA")
    }

    render() {
        const info = this.props.info;
      return (
        <View key={info.starTime} style={styles.container}>
          <Text style={styles.name}>{info.name}</Text>
          <Text style={styles.time}>{this.renderDateTime(info.timeStart)}</Text>
          <Text style={styles.location}>{info.location}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
  });