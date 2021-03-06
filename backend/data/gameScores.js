const gameScores = [
  {
    startTime: '2021-09-19T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'CHI -2.0',
    broadcaster: 'FOX',
    gameStatus: 'Final',
    homeTeam: {
      id: 3,
      team: 'Chicago Bears',
      teamAbbrev: 'CHI',
      record: '1-1',
      score: 20,
    },
    awayTeam: {
      id: 4,
      team: 'Cincinnati Bengals',
      teamAbbrev: 'CIN',
      record: '1-1',
      score: 17,
    },
  },
  {
    startTime: '2021-09-19T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'CLE -13.5',
    broadcaster: 'CBS',
    gameStatus: 'Final',
    homeTeam: {
      id: 5,
      team: 'Cleveland Browns',
      teamAbbrev: 'CLE',
      record: '1-1',
      score: 31,
    },
    awayTeam: {
      id: 34,
      team: 'Houston Texans',
      teamAbbrev: 'HOU',
      record: '1-1',
      score: 21,
    },
  },
  {
    startTime: '2021-09-19T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'LAR -4.0',
    broadcaster: 'FOX',
    gameStatus: 'Final',
    homeTeam: {
      id: 11,
      team: 'Indianapolis Colts',
      teamAbbrev: 'IND',
      record: '0-2',
      score: 24,
    },
    awayTeam: {
      id: 14,
      team: 'Los Angeles Rams',
      teamAbbrev: 'LAR',
      record: '2-0',
      score: 27,
    },
  },
  {
    startTime: '2021-09-19T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'BUF -3.5',
    broadcaster: 'FOX',
    gameStatus: 'Final',
    homeTeam: {
      id: 15,
      team: 'Miami Dolphins',
      teamAbbrev: 'MIA',
      record: '1-1',
      score: 0,
    },
    awayTeam: {
      id: 2,
      team: 'Buffalo Bills',
      teamAbbrev: 'BUF',
      record: '1-1',
      score: 35,
    },
  },
  {
    startTime: '2021-09-19T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'NE -6.0',
    broadcaster: 'CBS',
    gameStatus: 'Final',
    homeTeam: {
      id: 20,
      team: 'New York Jets',
      teamAbbrev: 'NYJ',
      record: '0-2',
      score: 6,
    },
    awayTeam: {
      id: 17,
      team: 'New England Patriots',
      teamAbbrev: 'NE',
      record: '1-1',
      score: 25,
    },
  },
  {
    startTime: '2021-09-19T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'SF -3.0',
    broadcaster: 'FOX',
    gameStatus: 'Final',
    homeTeam: {
      id: 21,
      team: 'Philadelphia Eagles',
      teamAbbrev: 'PHI',
      record: '1-1',
      score: 11,
    },
    awayTeam: {
      id: 25,
      team: 'San Francisco 49ers',
      teamAbbrev: 'SF',
      record: '2-0',
      score: 17,
    },
  },
  {
    startTime: '2021-09-19T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'PIT -5.0',
    broadcaster: 'CBS',
    gameStatus: 'Final',
    homeTeam: {
      id: 23,
      team: 'Pittsburgh Steelers',
      teamAbbrev: 'PIT',
      record: '1-1',
      score: 17,
    },
    awayTeam: {
      id: 13,
      team: 'Oakland Raiders',
      teamAbbrev: 'OAK',
      record: '2-0',
      score: 26,
    },
  },
  {
    startTime: '2021-09-19T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'NO -3.0',
    broadcaster: 'FOX',
    gameStatus: 'Final',
    homeTeam: {
      id: 29,
      team: 'Carolina Panthers',
      teamAbbrev: 'CAR',
      record: '2-0',
      score: 26,
    },
    awayTeam: {
      id: 18,
      team: 'New Orleans Saints',
      teamAbbrev: 'NO',
      record: '1-1',
      score: 7,
    },
  },
  {
    startTime: '2021-09-17T00:20:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'WSH -4.0',
    broadcaster: 'NFL NET',
    gameStatus: 'Final',
    homeTeam: {
      id: 28,
      team: 'Washington Redskins',
      teamAbbrev: 'WSH',
      record: '1-1',
      score: 30,
    },
    awayTeam: {
      id: 19,
      team: 'New York Giants',
      teamAbbrev: 'NYG',
      record: '0-2',
      score: 29,
    },
  },
  {
    startTime: '2021-09-14T00:15:00.000Z',
    quarter: 5,
    clock: '0:00',
    odds: 'BAL -3.0',
    broadcaster: 'ESPN/ABC',
    gameStatus: 'Final',
    homeTeam: {
      id: 13,
      team: 'Oakland Raiders',
      teamAbbrev: 'OAK',
      record: '1-0',
      score: 33,
    },
    awayTeam: {
      id: 33,
      team: 'Baltimore Ravens',
      teamAbbrev: 'BAL',
      record: '0-1',
      score: 27,
    },
  },
  {
    startTime: '2021-09-13T00:20:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'LAR -9.5',
    broadcaster: 'NBC',
    gameStatus: 'Final',
    homeTeam: {
      id: 14,
      team: 'Los Angeles Rams',
      teamAbbrev: 'LAR',
      record: '1-0',
      score: 34,
    },
    awayTeam: {
      id: 3,
      team: 'Chicago Bears',
      teamAbbrev: 'CHI',
      record: '0-1',
      score: 14,
    },
  },
  {
    startTime: '2021-09-12T20:25:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'KC -5.5',
    broadcaster: 'CBS',
    gameStatus: 'Final',
    homeTeam: {
      id: 12,
      team: 'Kansas City Chiefs',
      teamAbbrev: 'KC',
      record: '1-0',
      score: 33,
    },
    awayTeam: {
      id: 5,
      team: 'Cleveland Browns',
      teamAbbrev: 'CLE',
      record: '0-1',
      score: 29,
    },
  },
  {
    startTime: '2021-09-12T20:25:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'NE -3.5',
    broadcaster: 'CBS',
    gameStatus: 'Final',
    homeTeam: {
      id: 17,
      team: 'New England Patriots',
      teamAbbrev: 'NE',
      record: '0-1',
      score: 16,
    },
    awayTeam: {
      id: 15,
      team: 'Miami Dolphins',
      teamAbbrev: 'MIA',
      record: '1-0',
      score: 17,
    },
  },
  {
    startTime: '2021-09-12T20:25:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'GB -3.5',
    broadcaster: 'FOX',
    gameStatus: 'Final',
    homeTeam: {
      id: 18,
      team: 'New Orleans Saints',
      teamAbbrev: 'NO',
      record: '1-0',
      score: 38,
    },
    awayTeam: {
      id: 9,
      team: 'Green Bay Packers',
      teamAbbrev: 'GB',
      record: '0-1',
      score: 3,
    },
  },
  {
    startTime: '2021-09-12T20:25:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'DEN -3.0',
    broadcaster: 'FOX',
    gameStatus: 'Final',
    homeTeam: {
      id: 19,
      team: 'New York Giants',
      teamAbbrev: 'NYG',
      record: '0-1',
      score: 13,
    },
    awayTeam: {
      id: 7,
      team: 'Denver Broncos',
      teamAbbrev: 'DEN',
      record: '1-0',
      score: 27,
    },
  },
  {
    startTime: '2021-09-12T17:00:00.000Z',
    quarter: 4,
    clock: '0:00',
    odds: 'ATL -3.5',
    broadcaster: 'FOX',
    gameStatus: 'Final',
    homeTeam: {
      id: 1,
      team: 'Atlanta Falcons',
      teamAbbrev: 'ATL',
      record: '0-1',
      score: 6,
    },
    awayTeam: {
      id: 21,
      team: 'Philadelphia Eagles',
      teamAbbrev: 'PHI',
      record: '1-0',
      score: 32,
    },
  },
];
module.exports = gameScores;
