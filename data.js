import moment from 'moment';

export const getSchedule = () => {
    return schedule.filter(event => event.timeStart.isAfter(moment()));
};


const schedule = [
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2017-12-16T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2017-12-19T18:30:00-05:00')
    },
    {
      name: 'No Home Church or prayer the week of Christmas',
      hideDetails: true,
      timeStart: moment('2017-12-25T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2017-12-30T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-02T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-06T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Church (Basement)',
      locationAddress: '567 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-01-09T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-13T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-16T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-21T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Church (Basement)',
      locationAddress: '567 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-01-23T18:30:00-05:00')
    }
  ];