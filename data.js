import moment from 'moment';

export const getSchedule = () => {
    return schedule.filter(event => event.timeStart.isAfter(moment()));
};


const schedule = [
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-23T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '419 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-01-27T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '567 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-01-28T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-02-03T08:00:00-05:00')
    },
    {
      name: 'Home Church (Teaching @ 5:15 with Superbowl Party after at 6:30)',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-02-04T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-02-10T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '567 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-02-11T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-02-17T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-02-18T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-02-24T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '567 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-02-25T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-03-03T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-03-04T17:15:00-05:00')
    }
  ];