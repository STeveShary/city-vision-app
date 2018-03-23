import moment from 'moment';

export const getSchedule = () => {
    return schedule.filter(event => event.timeStart.isAfter(moment()));
};


const schedule = [
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-03-18T17:15:00-04:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-03-24T08:00:00-04:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '597 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-03-25T17:15:00-04:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-03-31T08:00:00-04:00')
    },
    {
      name: 'Easter',
      locationName: 'Check City Vision on Facebook for more info',
      locationAddress: '',
      timeStart: moment('2018-04-01')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-04-07T08:00:00-04:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '597 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-04-08T17:15:00-04:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-04-14T08:00:00-04:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-04-15T17:15:00-04:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-04-21T08:00:00-04:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '597 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-04-22T17:15:00-04:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-04-28T08:00:00-04:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-04-29T17:15:00-04:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-05-05T08:00:00-04:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '597 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-05-06T17:15:00-04:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-05-12T08:00:00-04:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-05-13T17:15:00-04:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-05-19T08:00:00-04:00')
    }
  ];