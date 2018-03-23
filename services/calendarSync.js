import React from 'react';
import { AsyncStorage, Platform } from 'react-native';
import { Calendar, Permissions } from 'expo';



const _askForCalendarPermissions = async () => {
    const response = await Permissions.askAsync('calendar');
    return response.status === 'granted';
  };

const getCalendars = async () => {
    const calendarGranted = await _askForCalendarPermissions();
    if (calendarGranted) {
      const eventCalendars = await Calendar.getCalendarsAsync('event');
      if(eventCalendars.length > 0) {
          return eventCalendars
          .filter(cal => cal.allowsModifications)
          .map(cal => ({id: cal.id,
            name: cal.title + "@" + cal.source.name,}));
      }
      return [];
    }
  };

const getSyncCalendarInfo = async () => {
    const calString = await AsyncStorage.getItem("@calendarSync:selectedCalendar");
    if(calString && calString.length > 0) {
        return JSON.parse(calString);
    } else {
        return null;
    }
};

const setSyncCalendarInfo = async (calendarInfo) => {   
    await AsyncStorage.setItem("@calendarSync:selectedCalendar", JSON.stringify(calendarInfo));
};

const setSyncEnabled = async (enabled) => {
    AsyncStorage.setItem("@calendarSync:enabled", enabled ? "true": "false");
}

const getSyncEnabled = async () => {
    const enabled = await AsyncStorage.getItem("@calendarSync:enabled")
    return enabled === "true";
}

const initCalendar = async () => {
    if(await _askForCalendarPermissions()) {
        return calendarSyncActions;
    } else {
        return { getCalendars: () => []};
    }
};


const calendarSyncActions = {
    getCalendars,
    getSyncCalendarInfo,
    setSyncCalendarInfo,
    getSyncEnabled,
    setSyncEnabled,
};

module.exports = {
    initCalendar,
}
