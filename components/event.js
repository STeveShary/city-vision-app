import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddressLink from './addressLink';
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
            <View key={info.name + info.startTime} style={styles.container}>
                <Text style={styles.name}>{info.name}</Text>
                { !info.hideDetails && 
                <Text style={styles.time}>{this.renderDateTime(info.timeStart)}</Text>}
                <AddressLink name={info.locationName} address={info.locationAddress}/>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    time: {
        paddingBottom: 4,
        paddingLeft: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
    },
    container: {
        margin: 5,
        paddingLeft: 5,
        borderLeftWidth: 3,
        borderColor: '#d6d7da',
        marginBottom: 10,
    }
});