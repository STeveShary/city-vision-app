import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Linking } from 'react-native';
import moment from 'moment';

export default class AddressLink extends React.Component {
    constructor(props) {
        super(props);
        this._openMap = this._openMap.bind(this);
    }

    _openMap() {
        if(Platform.OS === 'ios') {
            Linking.openURL('http://maps.apple.com/?q=' + this.props.address);
        } else {
            Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + this.props.address);
        }
        
    }

    render() {
        const locationName = this.props.name;
        const locationAddress = this.props.address;
        return (
            <TouchableOpacity onPress={this._openMap} style={styles.container}>
                <Text style={styles.name}>{locationName}</Text>
                <Text style={styles.address}>{locationAddress}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
    },
    name: {
        color: 'blue',
    },
    address: {
        color: 'blue'
    }
}); 