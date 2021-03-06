import { Markets } from '../../api/markets/markets.js';
import { Sunday } from '../../api/markets/markets.js';
import { Monday } from '../../api/markets/markets.js';
import { Tuesday } from '../../api/markets/markets.js';
import { Wednesday } from '../../api/markets/markets.js';
import { Thursday } from '../../api/markets/markets.js';
import { Friday } from '../../api/markets/markets.js';
import { Saturday } from '../../api/markets/markets.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Markets to pre-fill the Collection.
 * @type {*[]}
 */
const marketSeeds = [
  {
    name: 'Ala Moana Farmers Market',
    days: ['Saturday'],
    start: '9:00 AM',
    finish: '1:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '1450 Ala Moana Blvd.',
    latitude: '21.28928015800045',
    longitude: '-157.84219969299974',
  },
  {
    name: 'Banyan Court Mall (Peoples Open Market)',
    days: ['Saturday'],
    start: '6:15 AM',
    finish: '7:30 AM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '800 North King Street',
    latitude: '21.302690421000477',
    longitude: '-157.85208973299973',
  },
  {
    name: 'Benjamin Parker Elementary School',
    days: ['Saturday'],
    start: '8:00 AM',
    finish: '2:30 PM',
    island: 'Oahu',
    city: 'Kaneohe',
    address: '45-259 Waikalua Rd.',
    latitude: '21.413500808000435',
    longitude: '157.79883930699975',
  },
  {
    name: 'City Hall Parking Lot Deck (Peoples Open Market)',
    days: ['Monday'],
    start: '11:45 AM',
    finish: '12:30 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: 'Alapai & Beretania Street',
    latitude: '21.304850435000446',
    longitude: '-157.85774940299973',
  },
  {
    name: 'Fort Street near Wilcox Park',
    days: ['Tuesday', 'Friday'],
    start: '8:00 AM',
    finish: '2:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: 'In front of Macys',
    latitude: '21.304850435000446',
    longitude: '-157.85774940299973',
  },
  {
    name: 'Waikoloa Village Farmers Market',
    days: ['Saturday'],
    start: '7:15 AM',
    finish: '10:00 AM',
    island: 'Hawaii',
    city: 'Waikoloa',
    address: '68-3625 Paniolo Ave',
    latitude: '19.942734768000435',
    longitude: '-155.79099041899974',
  },
  {
    name: 'Waipahu District Park',
    days: ['Tuesday'],
    start: '8:15 AM',
    finish: '9:15 PM',
    island: 'Oahu',
    city: 'Waipahu',
    address: '94-230 Paiwa Street',
    latitude: '21.38803075800047',
    longitude: '-157.99936985699975',
  },
  {
    name: 'The Mauis Fresh Produce Farmers Market',
    days: ['Tuesday'],
    start: '7:00 AM',
    finish: '4:00 PM',
    island: 'Maui',
    city: 'Kahului',
    address: '275 W. Kaahumanu Ave',
    latitude: '20.881122485000446',
    longitude: '-156.47201774299972',
  },
  {
    name: 'Molokai Saturday Market',
    days: ['Saturday'],
    start: '7:00 AM',
    finish: '12:00 PM',
    island: 'Molokai',
    city: 'Kaunakakai',
    address: '40 Ala Malama St',
    latitude: '21.09017112200047',
    longitude: '-157.02199661599974',
  },
  {
    name: 'Pokai Bay Beach Park',
    days: ['Friday'],
    start: '11:00 AM',
    finish: '11:45 AM',
    island: 'Oahu',
    city: 'Waianae',
    address: '85-037 Pokai Bay Road',
    latitude: '21.44185853600044',
    longitude: '-158.18862608699973',
  },
  {
    name: 'Dole Cannery',
    days: ['Friday'],
    start: '10:00 AM',
    finish: '5:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '650 Iwilei Road',
    latitude: '21.316240109000432',
    longitude: '-157.87050896699975',
  },
  {
    name: 'Hawaii Kai Farmers Market',
    days: ['Saturday'],
    start: '9:00 AM',
    finish: '1:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '511 Lunalilo Home Road',
    latitude: '21.286071053000455',
    longitude: '-157.69769887499973',
  },
  {
    name: 'Honolulu Farmers Market',
    days: ['Wednesday'],
    start: '4:00 PM',
    finish: '7:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '777 Ward Avenue',
    latitude: '21.29999544000043',
    longitude: '-157.85177574799974',
  },
  {
    name: 'Kaumualii Street',
    days: ['Sunday'],
    start: '8:15 AM',
    finish: '9:30 AM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '1299 Kaumualii St',
    latitude: '21.304850435000446',
    longitude: '-157.85774940299973',
  },
  {
    name: 'Royal Kunia Park-n-Ride',
    days: ['Sunday'],
    start: '9:30 AM',
    finish: '11:00 AM',
    island: 'Oahu',
    city: 'Waipahu',
    address: '94-640 Kupuohi St',
    latitude: '21.385861307000425',
    longitude: '-158.00350991899975',
  },
  {
    name: 'Haleiwa Farmers Market',
    days: ['Monday'],
    start: '9:00 AM',
    finish: '1:00 PM',
    island: 'Oahu',
    city: 'Haleiwa',
    address: '59-864 Kamehameha Highway',
    latitude: '21.304850435000446',
    longitude: '-157.85774940299973',
  },
  {
    name: 'Salt Lake Municipal Lot',
    days: ['Tuesday'],
    start: '11:15 AM',
    finish: '12:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '5337 Likini Street',
    latitude: '21.34594295700043',
    longitude: '-157.90491127999974',
  },
  {
    name: 'Queens Medical Center',
    days: ['Wednesday'],
    start: '10:00 AM',
    finish: '2:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '1301 Punchbowl Street',
    latitude: '21.307250002000444',
    longitude: '-157.85527925099973',
  },
  {
    name: 'Ewa Beach Community Park',
    days: ['Friday'],
    start: '9:00 AM',
    finish: '10:00 AM',
    island: 'Oahu',
    city: 'Ewa Beach',
    address: '91-955 North Road',
    latitude: '21.31354031200044',
    longitude: '-158.00906976999974',
  },
  {
    name: 'Davies Pacific Center',
    days: ['Tuesday'],
    start: '10:00 AM',
    finish: '1:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '841 Bishop Street',
    latitude: '21.307830753000474',
    longitude: '-157.86242916299975',
  },
  {
    name: 'First Insurance Center',
    days: ['Wednesday'],
    start: '10:00 AM',
    finish: '1:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '1100 Ward Ave',
    latitude: '21.30303034500048',
    longitude: '-157.84976903599974',
  },
  {
    name: 'Waianae Farmers Market',
    days: ['Saturday'],
    start: '8:30 AM',
    finish: '11:30 AM',
    island: 'Oahu',
    city: 'Waianae',
    address: '85-251 Farrington Highway',
    latitude: '21.455940520000468',
    longitude: '-158.19946945199973',
  },
  {
    name: 'Kalihi Valley District Park',
    days: ['Saturday'],
    start: '10:00 AM',
    finish: '10:45 AM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '1911 Kam IV Road',
    latitude: '21.304850435000446',
    longitude: '-157.85774940299973',
  },
  {
    name: 'Ewa Beach Elementary School',
    days: ['Sunday'],
    start: '9:00 AM',
    finish: '1:00 PM',
    island: 'Oahu',
    city: 'Ewa Beach',
    address: '91-740 Papipi Road',
    latitude: '21.31503419100045',
    longitude: '-158.01439823499973',
  },
  {
    name: 'Kings Village Shopping Center',
    days: ['Friday'],
    start: '4:00 PM',
    finish: '9:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '131 Kaiulani Ave.',
    latitude: '21.316240109000432',
    longitude: '-157.87050896699975',
  },
];

const sundaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Sunday') === true;
});
const mondaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Monday') === true;
});
const tuesdaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Tuesday') === true;
});
const wednesdaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Wednesday') === true;
});
const thursdaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Thursday') === true;
});
const fridaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Friday') === true;
});
const saturdaySeeds = _.filter(marketSeeds, function (entry) {
  return _.contains(entry.days, 'Saturday') === true;
});

/**
 * Initialize the Market collection if empty with seed data.
 */

if (Markets.find().count() === 0) {
  _.each(marketSeeds, function seedMarkets(stuff) {
    Markets.insert(stuff);
  });
}

if (Sunday.find().count() === 0) {
  _.each(sundaySeeds, function seedSunday(stuff) {
    Sunday.insert(stuff);
  });
}

if (Monday.find().count() === 0) {
  _.each(mondaySeeds, function seedMonday(stuff) {
    Monday.insert(stuff);
  });
}

if (Tuesday.find().count() === 0) {
  _.each(tuesdaySeeds, function seedTuesday(stuff) {
    Tuesday.insert(stuff);
  });
}

if (Wednesday.find().count() === 0) {
  _.each(wednesdaySeeds, function seedWednesday(stuff) {
    Wednesday.insert(stuff);
  });
}

if (Thursday.find().count() === 0) {
  _.each(thursdaySeeds, function seedThursday(stuff) {
    Thursday.insert(stuff);
  });
}

if (Friday.find().count() === 0) {
  _.each(fridaySeeds, function seedFriday(stuff) {
    Friday.insert(stuff);
  });
}

if (Saturday.find().count() === 0) {
  _.each(saturdaySeeds, function seedSaturday(stuff) {
    Saturday.insert(stuff);
  });
}
