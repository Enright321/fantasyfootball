const { Client } = require('espn-fantasy-football-api/node'); // node
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const myClient = new Client({ leagueId: 81881363 });
myClient.setCookies({
  espnS2: process.env.espnS2_String,
  SWID: process.env.swid_string,
});

let startDate = '20210909';
let endDate = '20220109';

const games = myClient.getNFLGamesForPeriod({
  startDate: startDate,
  endDate: endDate,
});

const run = async () => {
  const data = await games;
  let gameScores = data.sort((a, b) => b.startTime - a.startTime);
  let newScores = gameScores.slice(0, 16);

  let gameStats = JSON.stringify(newScores);
  fs.writeFile(
    path.join(__dirname, '../data', 'gameScores.js'),
    gameStats,
    (err) => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
};

run();
