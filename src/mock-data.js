const mockData = [
  {
    _id: "633843205fafe61bd97d8f36",
    iata_code: "YUL",
    name: "Montreal / Pierre Elliott Trudeau International Airport",
    latitude_deg: 45.47060013,
    longitude_deg: -73.74079895,
    municipality: "Montréal",
  },
  {
    _id: "633843205fafe61bd97d8f34",
    iata_code: "YQB",
    name: "Quebec Jean Lesage International Airport",
    latitude_deg: 46.7911,
    longitude_deg: -71.393303,
    municipality: "Quebec",
  },
  {
    _id: "633843205fafe61bd97d8f35",
    iata_code: "YVR",
    name: "Vancouver International Airport",
    latitude_deg: 49.19390106,
    longitude_deg: -123.1839981,
    municipality: "Vancouver",
  },
  {
    _id: "633843205fafe61bd97d8f31",
    iata_code: "YEG",
    name: "Edmonton International Airport",
    latitude_deg: 53.30970001,
    longitude_deg: -113.5800018,
    municipality: "Edmonton",
  },
  {
    _id: "633843205fafe61bd97d8f2f",
    iata_code: "HIR",
    name: "Honiara International Airport",
    latitude_deg: -9.428,
    longitude_deg: 160.054993,
    municipality: "Honiara",
  },
  {
    _id: "633843205fafe61bd97d8f32",
    iata_code: "YOW",
    name: "Ottawa Macdonald-Cartier International Airport",
    latitude_deg: 45.32249832,
    longitude_deg: -75.66919708,
    municipality: "Ottawa",
  },
  {
    _id: "633843205fafe61bd97d8f30",
    iata_code: "KEF",
    name: "Keflavik International Airport",
    latitude_deg: 63.985001,
    longitude_deg: -22.6056,
    municipality: "Reykjavík",
  },
  {
    _id: "633843205fafe61bd97d8f33",
    iata_code: "POM",
    name: "Port Moresby Jacksons International Airport",
    latitude_deg: -9.443380356,
    longitude_deg: 147.2200012,
    municipality: "Port Moresby",
  },
  {
    _id: "633843205fafe61bd97d8f37",
    iata_code: "YWG",
    name: "Winnipeg / James Armstrong Richardson International Airport",
    latitude_deg: 49.90999985,
    longitude_deg: -97.23989868,
    municipality: "Winnipeg",
  },
  {
    _id: "633843205fafe61bd97d8f39",
    iata_code: "YYJ",
    name: "Victoria International Airport",
    latitude_deg: 48.6469,
    longitude_deg: -123.426003,
    municipality: "Victoria",
  },
  {
    _id: "633843205fafe61bd97d8f3a",
    iata_code: "YYC",
    name: "Calgary International Airport",
    latitude_deg: 51.11389923,
    longitude_deg: -114.0199966,
    municipality: "Calgary",
  },
  {
    _id: "633843205fafe61bd97d8f38",
    iata_code: "YXX",
    name: "Abbotsford International Airport",
    latitude_deg: 49.025299,
    longitude_deg: -122.361,
    municipality: "Abbotsford",
  },
  {
    _id: "633843205fafe61bd97d8f3b",
    iata_code: "YYT",
    name: "St. John's International Airport",
    latitude_deg: 47.61859894,
    longitude_deg: -52.75189972,
    municipality: "St. John's",
  },
  {
    _id: "633843205fafe61bd97d8f3d",
    iata_code: "LOS",
    name: "Murtala Muhammed International Airport",
    latitude_deg: 6.577370167,
    longitude_deg: 3.321160078,
    municipality: "Lagos",
  },
  {
    _id: "633843205fafe61bd97d8f3c",
    iata_code: "YHZ",
    name: "Halifax / Stanfield International Airport",
    latitude_deg: 44.88079834,
    longitude_deg: -63.50859833,
    municipality: "Halifax",
  },
  {
    _id: "633843205fafe61bd97d8f3e",
    iata_code: "ACC",
    name: "Kotoka International Airport",
    latitude_deg: 5.6051898,
    longitude_deg: -0.166786,
    municipality: "Accra",
  },
  {
    _id: "633843205fafe61bd97d8f3f",
    iata_code: "BRU",
    name: "Brussels Airport",
    latitude_deg: 50.90140152,
    longitude_deg: 4.48443985,
    municipality: "Brussels",
  },
  {
    _id: "633843205fafe61bd97d8f42",
    iata_code: "CGN",
    name: "Cologne Bonn Airport",
    latitude_deg: 50.86589813,
    longitude_deg: 7.142739773,
    municipality: "Cologne",
  },
  {
    _id: "633843205fafe61bd97d8f40",
    iata_code: "BER",
    name: "Berlin Brandenburg Airport",
    latitude_deg: 52.362247,
    longitude_deg: 13.500672,
    municipality: "Berlin",
  },
  {
    _id: "633843205fafe61bd97d8f41",
    iata_code: "HAM",
    name: "Hamburg Helmut Schmidt Airport",
    latitude_deg: 53.630402,
    longitude_deg: 9.98823,
    municipality: "Hamburg",
  },
  {
    _id: "633843205fafe61bd97d8f43",
    iata_code: "DUS",
    name: "Düsseldorf Airport",
    latitude_deg: 51.289501,
    longitude_deg: 6.76678,
    municipality: "Düsseldorf",
  },
  {
    _id: "633843205fafe61bd97d8f44",
    iata_code: "YYZ",
    name: "Lester B. Pearson International Airport",
    latitude_deg: 43.67720032,
    longitude_deg: -79.63059998,
    municipality: "Toronto",
  },
  {
    _id: "633843205fafe61bd97d8f45",
    iata_code: "ALG",
    name: "Houari Boumediene Airport",
    latitude_deg: 36.691002,
    longitude_deg: 3.21541,
    municipality: "Algiers",
  },
  {
    _id: "633843205fafe61bd97d8f4d",
    iata_code: "STR",
    name: "Stuttgart Airport",
    latitude_deg: 48.68989944,
    longitude_deg: 9.221960068,
    municipality: "Stuttgart",
  },
  {
    _id: "633843205fafe61bd97d8f48",
    iata_code: "FRA",
    name: "Frankfurt am Main Airport",
    latitude_deg: 50.036249,
    longitude_deg: 8.559294,
    municipality: "Frankfurt am Main",
  },
  {
    _id: "633843205fafe61bd97d8f4e",
    iata_code: "LGW",
    name: "London Gatwick Airport",
    latitude_deg: 51.148102,
    longitude_deg: -0.190278,
    municipality: "London",
  },
  {
    _id: "633843205fafe61bd97d8f4c",
    iata_code: "LEJ",
    name: "Leipzig/Halle Airport",
    latitude_deg: 51.423889,
    longitude_deg: 12.236389,
    municipality: "Leipzig",
  },
  {
    _id: "633843205fafe61bd97d8f4f",
    iata_code: "LHR",
    name: "London Heathrow Airport",
    latitude_deg: 51.4706,
    longitude_deg: -0.461941,
    municipality: "London",
  },
  {
    _id: "633843205fafe61bd97d8f50",
    iata_code: "GLA",
    name: "Glasgow International Airport",
    latitude_deg: 55.871899,
    longitude_deg: -4.43306,
    municipality: "Paisley, Renfrewshire",
  },
  {
    _id: "633843205fafe61bd97d8f46",
    iata_code: "ABV",
    name: "Nnamdi Azikiwe International Airport",
    latitude_deg: 9.006790161,
    longitude_deg: 7.263169765,
    municipality: "Abuja",
  },
  {
    _id: "633843205fafe61bd97d8f52",
    iata_code: "STN",
    name: "London Stansted Airport",
    latitude_deg: 51.88499832,
    longitude_deg: 0.234999999,
    municipality: "London",
  },
  {
    _id: "633843205fafe61bd97d8f51",
    iata_code: "EDI",
    name: "Edinburgh Airport",
    latitude_deg: 55.950145,
    longitude_deg: -3.372288,
    municipality: "Edinburgh",
  },
  {
    _id: "633843205fafe61bd97d8f53",
    iata_code: "AMS",
    name: "Amsterdam Airport Schiphol",
    latitude_deg: 52.308601,
    longitude_deg: 4.76389,
    municipality: "Amsterdam",
  },
  {
    _id: "633843205fafe61bd97d8f54",
    iata_code: "EIN",
    name: "Eindhoven Airport",
    latitude_deg: 51.45009995,
    longitude_deg: 5.374529839,
    municipality: "Eindhoven",
  },
  {
    _id: "633843205fafe61bd97d8f47",
    iata_code: "TUN",
    name: "Tunis Carthage International Airport",
    latitude_deg: 36.85100174,
    longitude_deg: 10.22719955,
    municipality: "Tunis",
  },
  {
    _id: "633843205fafe61bd97d8f55",
    iata_code: "DUB",
    name: "Dublin Airport",
    latitude_deg: 53.421299,
    longitude_deg: -6.27007,
    municipality: "Dublin",
  },
  {
    _id: "633843205fafe61bd97d8f4a",
    iata_code: "MUC",
    name: "Munich Airport",
    latitude_deg: 48.353802,
    longitude_deg: 11.7861,
    municipality: "Munich",
  },
  {
    _id: "633843205fafe61bd97d8f56",
    iata_code: "SNN",
    name: "Shannon Airport",
    latitude_deg: 52.702,
    longitude_deg: -8.92482,
    municipality: "Shannon",
  },
  {
    _id: "633843205fafe61bd97d8f4b",
    iata_code: "NUE",
    name: "Nuremberg Airport",
    latitude_deg: 49.498699,
    longitude_deg: 11.078056,
    municipality: "Nuremberg",
  },
  {
    _id: "633843205fafe61bd97d8f49",
    iata_code: "NIM",
    name: "Diori Hamani International Airport",
    latitude_deg: 13.4815,
    longitude_deg: 2.18361,
    municipality: "Niamey",
  },
  {
    _id: "633843205fafe61bd97d8f58",
    iata_code: "CPH",
    name: "Copenhagen Kastrup Airport",
    latitude_deg: 55.61790085,
    longitude_deg: 12.65600014,
    municipality: "Copenhagen",
  },
  {
    _id: "633843205fafe61bd97d8f59",
    iata_code: "LUX",
    name: "Luxembourg-Findel International Airport",
    latitude_deg: 49.6233333,
    longitude_deg: 6.2044444,
    municipality: "Luxembourg",
  },
  {
    _id: "633843205fafe61bd97d8f5b",
    iata_code: "OSL",
    name: "Oslo Airport, Gardermoen",
    latitude_deg: 60.193901,
    longitude_deg: 11.1004,
    municipality: "Oslo",
  },
  {
    _id: "633843205fafe61bd97d8f5a",
    iata_code: "BGO",
    name: "Bergen Airport, Flesland",
    latitude_deg: 60.2934,
    longitude_deg: 5.21814,
    municipality: "Bergen",
  },
  {
    _id: "633843205fafe61bd97d8f5d",
    iata_code: "TRD",
    name: "Trondheim Airport, Værnes",
    latitude_deg: 63.457802,
    longitude_deg: 10.924,
    municipality: "Trondheim",
  },
  {
    _id: "633843205fafe61bd97d8f5c",
    iata_code: "TOS",
    name: "Tromsø Airport, Langnes",
    latitude_deg: 69.683296,
    longitude_deg: 18.9189,
    municipality: "Tromsø",
  },
  {
    _id: "633843205fafe61bd97d8f61",
    iata_code: "TLL",
    name: "Lennart Meri Tallinn Airport",
    latitude_deg: 59.41329956,
    longitude_deg: 24.83279991,
    municipality: "Tallinn",
  },
  {
    _id: "633843205fafe61bd97d8f5e",
    iata_code: "SVG",
    name: "Stavanger Airport, Sola",
    latitude_deg: 58.876701,
    longitude_deg: 5.63778,
    municipality: "Stavanger",
  },
  {
    _id: "633843205fafe61bd97d8f63",
    iata_code: "BFS",
    name: "Belfast International Airport",
    latitude_deg: 54.65750122,
    longitude_deg: -6.215829849,
    municipality: "Belfast",
  },
  {
    _id: "633843205fafe61bd97d8f62",
    iata_code: "HEL",
    name: "Helsinki Vantaa Airport",
    latitude_deg: 60.3172,
    longitude_deg: 24.963301,
    municipality: "Helsinki",
  },
  {
    _id: "633843205fafe61bd97d8f64",
    iata_code: "BHX",
    name: "Birmingham International Airport",
    latitude_deg: 52.45389938,
    longitude_deg: -1.748029947,
    municipality: "Birmingham",
  },
  {
    _id: "633843205fafe61bd97d8f60",
    iata_code: "HAJ",
    name: "Hannover Airport",
    latitude_deg: 52.46110153,
    longitude_deg: 9.685079575,
    municipality: "Hannover",
  },
  {
    _id: "633843205fafe61bd97d8f5f",
    iata_code: "GDN",
    name: "Gdańsk Lech Wałęsa Airport",
    latitude_deg: 54.37760162,
    longitude_deg: 18.46619987,
    municipality: "Gdańsk",
  },
  {
    _id: "633843205fafe61bd97d8f57",
    iata_code: "BLL",
    name: "Billund Airport",
    latitude_deg: 55.74029922,
    longitude_deg: 9.151780128,
    municipality: "Billund",
  },
  {
    _id: "633843205fafe61bd97d8f65",
    iata_code: "MAN",
    name: "Manchester Airport",
    latitude_deg: 53.349375,
    longitude_deg: -2.279521,
    municipality: "Manchester",
  },
  {
    _id: "633843205fafe61bd97d8f67",
    iata_code: "KRK",
    name: "Kraków John Paul II International Airport",
    latitude_deg: 50.077702,
    longitude_deg: 19.7848,
    municipality: "Kraków",
  },
  {
    _id: "633843205fafe61bd97d8f69",
    iata_code: "GOT",
    name: "Gothenburg-Landvetter Airport",
    latitude_deg: 57.66279984,
    longitude_deg: 12.27980042,
    municipality: "Gothenburg",
  },
  {
    _id: "633843205fafe61bd97d8f6a",
    iata_code: "ARN",
    name: "Stockholm-Arlanda Airport",
    latitude_deg: 59.65190125,
    longitude_deg: 17.91860008,
    municipality: "Stockholm",
  },
  {
    _id: "633843205fafe61bd97d8f68",
    iata_code: "WAW",
    name: "Warsaw Chopin Airport",
    latitude_deg: 52.16569901,
    longitude_deg: 20.96710014,
    municipality: "Warsaw",
  },
  {
    _id: "633843205fafe61bd97d8f6c",
    iata_code: "VNO",
    name: "Vilnius International Airport",
    latitude_deg: 54.634102,
    longitude_deg: 25.285801,
    municipality: "Vilnius",
  },
  {
    _id: "633843205fafe61bd97d8f6d",
    iata_code: "CPT",
    name: "Cape Town International Airport",
    latitude_deg: -33.96480179,
    longitude_deg: 18.60169983,
    municipality: "Cape Town",
  },
  {
    _id: "633843205fafe61bd97d8f66",
    iata_code: "LTN",
    name: "London Luton Airport",
    latitude_deg: 51.87469864,
    longitude_deg: -0.368333012,
    municipality: "London",
  },
  {
    _id: "633843205fafe61bd97d8f6b",
    iata_code: "RIX",
    name: "Riga International Airport",
    latitude_deg: 56.923599,
    longitude_deg: 23.9711,
    municipality: "Riga",
  },
  {
    _id: "633843205fafe61bd97d8f6e",
    iata_code: "DUR",
    name: "King Shaka International Airport",
    latitude_deg: -29.61444444,
    longitude_deg: 31.11972222,
    municipality: "Durban",
  },
  {
    _id: "633843205fafe61bd97d8f6f",
    iata_code: "JNB",
    name: "OR Tambo International Airport",
    latitude_deg: -26.1392,
    longitude_deg: 28.246,
    municipality: "Johannesburg",
  },
  {
    _id: "633843205fafe61bd97d8f70",
    iata_code: "MPM",
    name: "Maputo Airport",
    latitude_deg: -25.920799,
    longitude_deg: 32.572601,
    municipality: "Maputo",
  },
  {
    _id: "633843205fafe61bd97d8f77",
    iata_code: "BJL",
    name: "Banjul International Airport",
    latitude_deg: 13.338,
    longitude_deg: -16.652201,
    municipality: "Banjul",
  },
  {
    _id: "633843205fafe61bd97d8f71",
    iata_code: "SEZ",
    name: "Seychelles International Airport",
    latitude_deg: -4.67434,
    longitude_deg: 55.521801,
    municipality: "Mahe Island",
  },
  {
    _id: "633843205fafe61bd97d8f78",
    iata_code: "FUE",
    name: "Fuerteventura Airport",
    latitude_deg: 28.4527,
    longitude_deg: -13.8638,
    municipality: "Fuerteventura Island",
  },
  {
    _id: "633843205fafe61bd97d8f73",
    iata_code: "HRE",
    name: "Robert Gabriel Mugabe International Airport",
    latitude_deg: -17.931801,
    longitude_deg: 31.0928,
    municipality: "Harare",
  },
  {
    _id: "633843205fafe61bd97d8f72",
    iata_code: "NDJ",
    name: "N'Djamena International Airport",
    latitude_deg: 12.1337,
    longitude_deg: 15.034,
    municipality: "N'Djamena",
  },
  {
    _id: "633843205fafe61bd97d8f7b",
    iata_code: "TFS",
    name: "Tenerife Sur Airport",
    latitude_deg: 28.0445,
    longitude_deg: -16.5725,
    municipality: "Tenerife",
  },
  {
    _id: "633843205fafe61bd97d8f7a",
    iata_code: "ACE",
    name: "César Manrique-Lanzarote Airport",
    latitude_deg: 28.945499,
    longitude_deg: -13.6052,
    municipality: "Lanzarote Island",
  },
  {
    _id: "633843205fafe61bd97d8f76",
    iata_code: "BKO",
    name: "Modibo Keita International Airport",
    latitude_deg: 12.5335,
    longitude_deg: -7.94994,
    municipality: "Bamako",
  },
  {
    _id: "633843205fafe61bd97d8f74",
    iata_code: "WDH",
    name: "Hosea Kutako International Airport",
    latitude_deg: -22.4799,
    longitude_deg: 17.4709,
    municipality: "Windhoek",
  },
  {
    _id: "633843205fafe61bd97d8f7c",
    iata_code: "FNA",
    name: "Lungi International Airport",
    latitude_deg: 8.61644,
    longitude_deg: -13.1955,
    municipality: "Freetown (Lungi-Town)",
  },
  {
    _id: "633843205fafe61bd97d8f7d",
    iata_code: "ROB",
    name: "Roberts International Airport",
    latitude_deg: 6.23379,
    longitude_deg: -10.3623,
    municipality: "Monrovia",
  },
  {
    _id: "633843205fafe61bd97d8f79",
    iata_code: "LPA",
    name: "Gran Canaria Airport",
    latitude_deg: 27.9319,
    longitude_deg: -15.3866,
    municipality: "Gran Canaria Island",
  },
  {
    _id: "633843205fafe61bd97d8f75",
    iata_code: "FIH",
    name: "Ndjili International Airport",
    latitude_deg: -4.38575,
    longitude_deg: 15.4446,
    municipality: "Kinshasa",
  },
  {
    _id: "633843205fafe61bd97d8f7e",
    iata_code: "CMN",
    name: "Mohammed V International Airport",
    latitude_deg: 33.36750031,
    longitude_deg: -7.589970112,
    municipality: "Casablanca",
  },
  {
    _id: "633843205fafe61bd97d8f7f",
    iata_code: "DSS",
    name: "Blaise Diagne International Airport",
    latitude_deg: 14.67,
    longitude_deg: -17.073333,
    municipality: "Dakar",
  },
  {
    _id: "633843205fafe61bd97d8f82",
    iata_code: "TNR",
    name: "Ivato Airport",
    latitude_deg: -18.7969,
    longitude_deg: 47.478802,
    municipality: "Antananarivo",
  },
  {
    _id: "633843205fafe61bd97d8f81",
    iata_code: "SID",
    name: "Amílcar Cabral International Airport",
    latitude_deg: 16.7414,
    longitude_deg: -22.9494,
    municipality: "Espargos",
  },
  {
    _id: "633843205fafe61bd97d8f83",
    iata_code: "RUN",
    name: "Roland Garros Airport",
    latitude_deg: -20.8871,
    longitude_deg: 55.5103,
    municipality: "St Denis",
  },
  {
    _id: "633843205fafe61bd97d8f80",
    iata_code: "NKC",
    name: "Nouakchott–Oumtounsy International Airport",
    latitude_deg: 18.31,
    longitude_deg: -15.9697222,
    municipality: "Nouakchott",
  },
  {
    _id: "633843205fafe61bd97d8f84",
    iata_code: "SHO",
    name: "King Mswati III International Airport",
    latitude_deg: -26.358611,
    longitude_deg: 31.716944,
    municipality: "Mpaka",
  },
  {
    _id: "633843205fafe61bd97d8f85",
    iata_code: "GBE",
    name: "Sir Seretse Khama International Airport",
    latitude_deg: -24.555201,
    longitude_deg: 25.9182,
    municipality: "Gaborone",
  },
];

export { mockData };
