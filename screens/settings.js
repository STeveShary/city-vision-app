import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, AsyncStorage, Picker, Button } from 'react-native';
import SettingsToggle from '../components/settingsToggle';
import CalendarSync from '../services/calendarSync';
export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Event Settings',
    };


    constructor(props) {
        super(props);
        this.enableSync = this.enableSync.bind(this);
        this.clearCalendar = this.clearCalendar.bind(this);
        this.init = this.init.bind(this);
        this.renderCalendarSyncOptions = this.renderCalendarSyncOptions.bind(this);
        this.setCalendarToSync = this.setCalendarToSync.bind(this);
        this.chooseCalendar = this.chooseCalendar.bind(this);
        this.state = {};
        this.init();
    }

    async init() {
        const toggledVal = await AsyncStorage.getItem("@setting:calendarSync");
        if (toggledVal) {
            this.enableSync();
        } else {
            this.clearCalendar();
        }
    }

    async enableSync() {
        const calendarActions = await CalendarSync.initCalendar();
        const availableCalendars = await calendarActions.getCalendars();
        const selectedSyncCalendar = await calendarActions.getSyncCalendarInfo();
        const syncEnabled = true;
        this.setState({
            calendarActions,
            availableCalendars,
            selectedSyncCalendar,
            syncEnabled
        });
    }

    async clearCalendar() {
        this.setState({ syncEnabled: false });
    }

    async setCalendarToSync(cal) {
        console.log("Setting calendar to sync");
        console.log(cal, null, 2);
        await this.state.calendarActions.setSyncCalendarInfo(cal);
        this.setState({ selectedSyncCalendar: cal, chooseCalendar: false });
    }

    chooseCalendar() {
        this.setState({ chooseCalendar: true });
    }


    renderCalendarSyncOptions() {
        return (
            <View>
                {
                    this.state.availableCalendars.length === 0 ? 
                    <Text> Unable to set calendar because none is available</Text> :
                    null
                }
                <Text>Select Calendar to Add Events:</Text>
                <Text>{this.state.selectedSyncCalendar ?
                    this.state.selectedSyncCalendar.name :
                    "No Calendar Selected"}</Text>
                {
                    this.state.chooseCalendar ?
                        <Picker
                            selectedValue={this.state.selectedSyncCalendar}
                            onValueChange={(itemValue) => this.setCalendarToSync(itemValue)}>
                            {this.state.availableCalendars.map(function (cal) {
                                return <Picker.Item label={cal.name} value={cal} key={cal} />;
                            })}
                        </Picker> :

                        <Button
                            onPress={this.chooseCalendar}
                            title="Change Calendar"
                        />

                }
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <SettingsToggle
                        text="Sync Events With Calendar"
                        storageKey="calendarSync"
                        toggleOnAction={this.enableSync}
                        toggleOffAction={this.clearCalendar} />
                    {this.state.syncEnabled ?
                        this.renderCalendarSyncOptions() : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
    }
});
