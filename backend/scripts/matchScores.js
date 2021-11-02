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

const boxScore = myClient.getBoxscoreForWeek({
  seasonId: 2021,
  matchupPeriodId: 8,
  scoringPeriodId: 8,
});

const run = async () => {
  const matchScores = await boxScore;

  // convert to json string and writes to js file
  let objToJson = JSON.stringify(matchScores);
  fs.writeFile(
    path.join(__dirname, '../data', 'matchScores.js'),
    objToJson,
    (err) => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
};

run();
