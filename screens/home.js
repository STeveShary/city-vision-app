import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import Event from '../components/event';
import moment from 'moment';
import { getSchedule } from '../data';
import { FontAwesome } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
    static navigationOptions = { title: 'Home', header: null };

    constructor(props) {
        super(props);
        this.props = props;
        this.onSettings = this.onSettings.bind(this);
    }

    onSettings() {
        this.props.navigation.navigate('Settings');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={styles.logo} source={require('../assets/icon.png')}></Image>
                    <Text style={styles.title}>City Vision Fellowship</Text>
                </View>
                <View style={styles.scheduleContainer}>
                    <View style={styles.scheduleHeader}>
                        <Text style={styles.scheduleTitle}>Upcoming Events</Text>
                    </View>
                    <FlatList
                        data={getSchedule()}
                        renderItem={({ item }) => <Event info={item} />}
                        keyExtractor={(item, index) => item.name + item.timeStart}
                    />
                </View>
                <View sty>
                </View>
            </View>
        );
    }
}

const darkGrey = "#585858"
const lightGrey = "#EEEEEE"
const grey = "#DDDDDD"

const styles = StyleSheet.create({
    settings: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: 10,
    },
    settingsText: {
        fontSize: 10,
    },
    scheduleHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: lightGrey,
        margin: 6,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: grey,
    },
    calendar: {
        paddingRight: 20,
    },
    logo: {
        height: 52,
        width: 52,
    },
    title: {
        paddingLeft: 10,
        fontSize: 24,
    },
    scheduleTitle: {
        fontSize: 24,
        paddingLeft: 10,
        padding: 5,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 30,
        alignItems: 'center',
    },
    scheduleContainer: {
        flex: 9,
        alignItems: 'stretch',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
