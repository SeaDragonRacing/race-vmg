/*
  Race VMG course and mark database

  Latitude:
  - South is negative

  Longitude:
  - East is positive

  Marks with null coordinates still need a representative
  target point before VMG can be calculated.
*/

const marks = {
  NLYB: {
    name: "Northern Leading Yellow Buoy",
    latitude: -36.8221667,
    longitude: 174.8433333
  },

  MOTY: {
    name: "Motukorea Racing Buoy",
    latitude: -36.8300000,
    longitude: 174.8666667
  },

  ILIO: {
    name: "Iliomama Racing Buoy",
    latitude: -36.8116667,
    longitude: 174.8770000
  },

  MOTG: {
    name: "Motuihe Green Buoy",
    latitude: -36.8029200,
    longitude: 174.9222000
  },

  FLAX: {
    name: "Flax Point Yellow Buoy",
    latitude: -36.8068333,
    longitude: 174.8325000
  },

  BROWN: {
    name: "Browns Island",
    shortName: "Sparkplug",
    aliases: [
        "Browns Island",
        "Sparkplug"
    ],
    latitude: -36.8239883,
    longitude: 174.8989333
  },

  DORIS: {
    name: "Doris Rock",
    latitude: -36.8330550,
    longitude: 174.8312600
  },

  BRLIGHT: {
    name: "Bean Rock Light",
    latitude: -36.8332983,
    longitude: 174.8311950
  },

  BRR: {
    name: "Bean Rock Racing Buoy",
    latitude: -36.8365000,
    longitude: 174.8271667
  },

  NAVY: {
    name: "Navy Buoy",
    latitude: -36.8316667,
    longitude: 174.9112617
  },

  RANG: {
    name: "Rangitoto Racing Buoy",
    latitude: -36.8133333,
    longitude: 174.8473333
  },

  WEST: {
    name: "Westhaven",
    latitude: -36.8316667,
    longitude: 174.7485000
  },

  BAYS: {
    name: "Bayswater",
    latitude: -36.8296667,
    longitude: 174.7628333
  },

  STAN: {
    name: "Stanley Point",
    latitude: -36.8308333,
    longitude: 174.7765000
  },

  DEVO: {
    name: "Devonport",
    latitude: -36.8333333,
    longitude: 174.7900000
  },

  TORP: {
    name: "Torpedo Bay",
    latitude: -36.8351667,
    longitude: 174.8063333
  },

  NTHD: {
    name: "North Head",
    latitude: -36.8271667,
    longitude: 174.8180000
  },

  ROUG: {
    name: "Rough Rock",
    latitude: -36.8178333,
    longitude: 174.8250000
  },

  NARR: {
    name: "Narrow Neck",
    latitude: -36.7971667,
    longitude: 174.8085000
  },

  CABL: {
    name: "Cable",
    latitude: -36.7935000,
    longitude: 174.7880000
  },

  MCKE: {
    name: "McKenzie",
    latitude: -36.7806667,
    longitude: 174.8175000
  },

  SALT: {
    name: "Salt Works",
    latitude: -36.7966667,
    longitude: 174.8226667
  },

  BAST: {
    name: "Bastion",
    latitude: -36.8401667,
    longitude: 174.8226667
  },

  ORAK: {
    name: "Orakei",
    latitude: -36.8423333,
    longitude: 174.8120000
  },

  RESO: {
    name: "Resolution",
    latitude: -36.8443333,
    longitude: 174.7981667
  },

  CHEL: {
    name: "Chelsea",
    latitude: -36.8280000,
    longitude: 174.7300000
  },

  MEOL: {
    name: "Meola",
    latitude: -36.8301667,
    longitude: 174.7110000
  },

  GULF: {
    name: "Gulf Harbour",
    latitude: -36.6521667,
    longitude: 174.8005000
  },

  TORB: {
    name: "Torbay",
    latitude: -36.7083333,
    longitude: 174.7883333
  },

  SGTC: {
    name: "Sergeant Channel",
    latitude: -36.8216667,
    longitude: 174.9566667
  },

  ROCK: {
    name: "Rocky Bay",
    latitude: -36.8330000,
    longitude: 175.0550000
  }
};


const courses = [
  {
    id: 1,
    name: "Course 1",
    distanceNm: 8.4,
    marks: [
      "NLYB"
    ]
  },

  {
    id: 2,
    name: "Course 2",
    distanceNm: 9.5,
    marks: [
      "MOTY",
      "ILIO",
      "MOTY"
    ]
  },

  {
    id: 3,
    name: "Course 3",
    distanceNm: 12.7,
    marks: [
      "MOTY",
      "MOTG",
      "MOTY"
    ]
  },

  {
    id: 4,
    name: "Course 4",
    distanceNm: 6.0,
    marks: [
      "MOTY"
    ]
  },

  {
    id: 5,
    name: "Course 5",
    distanceNm: 10.5,
    marks: [
      "MOTY",
      "FLAX",
      "MOTY"
    ]
  },

  {
    id: 6,
    name: "Course 6",
    distanceNm: 12.6,
    marks: [
      "BROWN",
      "MOTG",
      "MOTY"
    ]
  },

  {
    id: 7,
    name: "Course 7",
    distanceNm: 10.3,
    marks: [
      "NLYB",
      "DORIS",
      "BRLIGHT",
      "BRR",
      "NLYB",
      "MOTY"
    ]
  },

  {
    id: 8,
    name: "Course 8",
    distanceNm: 10.5,
    marks: [
      "BROWN",
      "NAVY",
      "RANG"
    ]
  },

  {
    id: 9,
    name: "Course 9",
    distanceNm: 10.5,
    marks: [
      "RANG",
      "ILIO",
      "MOTY"
    ]
  },

  {
    id: 10,
    name: "Course 10",
    distanceNm: 11.0,
    marks: [
      "NLYB",
      "RANG",
      "ILIO",
      "MOTY"
    ]
  },

  {
    id: 11,
    name: "Course 11",
    distanceNm: 10.5,
    marks: [
      "MOTY",
      "ILIO",
      "MOTY",
      "ILIO",
      "MOTY"
    ]
  }
];