import moment from 'moment';

export const getSchedule = () => {
    return schedule.filter(event => event.timeStart.isAfter(moment()));
};


const schedule = [
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-06T08:00:00-05:00')
    },
    {
      name: 'Goal Planning Seminar',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-06T09:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary house',
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
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Lower level)',
      locationAddress: '567 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-01-16T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-21T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-23T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-01-27T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Lower level)',
      locationAddress: '567 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-01-30T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-02-03T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-02-06T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-02-10T08:00:00-05:00')
    },
    {
      name: 'CT (Central Teaching)',
      locationName: 'Rennovation Center (Lower level)',
      locationAddress: '567 Hertel Ave, Buffalo, NY 14207',
      timeStart: moment('2018-02-13T18:30:00-05:00')
    },
    {
      name: 'Group Prayer',
      locationName: 'Schroedary house',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-02-17T08:00:00-05:00')
    },
    {
      name: 'Home Church',
      locationName: 'Schroedary House',
      locationAddress: '21 Woodward Ave.  Buffalo, NY 14214',
      timeStart: moment('2018-02-20T18:30:00-05:00')
    }
  ];