import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddressLink from './addressLink';
import moment from 'moment';

export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    renderTime(date) {
        let timeStr =  new moment(date).format("h:mmA");
        if(timeStr === '12:00AM') {
            timeStr = "All Day"
        }
        return timeStr;
    }

    renderDayOfWeek(date) {
        return new moment(date).format("ddd")
    }

    renderMonth(date) {
        return new moment(date).format("MMM")
    }

    renderDayOfMonth(date) {
        return new moment(date).format("Do")
    }

    render() {
        const info = this.props.info;
        return (
            <View style={styles.eventContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.dayOfWeek}>{this.renderDayOfWeek(info.timeStart)}</Text>
                    <Text style={styles.month}>{this.renderMonth(info.timeStart)}</Text>
                    <Text style={styles.dayOfMonth}>{this.renderDayOfMonth(info.timeStart)}</Text>
                </View>
                <View key={info.name + info.timeStart} style={styles.container}>
                    <View style={styles.eventInfo}>
                        <View style={styles.eventTitle}>
                            <Text style={styles.name}>{info.name}</Text>
                            <Text style={styles.time}>{this.renderTime(info.timeStart)}</Text>
                        </View>
                        <AddressLink name={info.locationName} address={info.locationAddress} />
                    </View>
                </View>
            </View>
        );
    }
}

const darkGrey = "#585858"
const lightGrey = "#EEEEEE"

const styles = StyleSheet.create({
    dayOfWeek: {
        fontSize: 36,
        color: darkGrey,
    },
    month: {
        fontSize: 16,
        color: darkGrey,
    },
    dayOfMonth: {
        fontSize: 20,
        color: darkGrey,
    },
    eventContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
    },
    dateContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightGrey,
        width: 80,
        margin: 2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: lightGrey,
    },
    time: {
        paddingBottom: 4,
        paddingLeft: 10,
        fontSize: 18,
        color: darkGrey,
    },
    name: {
        color: darkGrey,
        fontSize: 28,
        paddingTop: 2,
        paddingBottom: 5,
        paddingLeft: 9,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#d6d7da',
        marginBottom: 10,
        justifyContent: 'space-between',
    }
});