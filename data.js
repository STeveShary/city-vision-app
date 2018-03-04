import moment from 'moment';

export const getSchedule = () => {
    return schedule.filter(event => event.timeStart.isAfter(moment()));
};


const schedule = [
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
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-03-10T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '597 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-03-11T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-03-17T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-03-18T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-03-24T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '597 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-03-25T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-03-31T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-04-01T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-04-07T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Upper Level)',
      locationAddress: '597 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-04-08T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-04-14T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-04-15T17:15:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'The Birdhouse',
      locationAddress: '149 Bird Ave Buffalo, NY 14213',
      timeStart: moment('2018-04-21T08:00:00-05:00')
    }
  ];