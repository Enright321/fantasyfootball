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

const teams = myClient.getTeamsAtWeek({
  seasonId: 2021,
  scoringPeriodId: 1,
});

const run = async () => {
  const data = await teams;

  let teamRanks = data.sort((a, b) => a.playoffSeed - b.playoffSeed);
  console.log(teamRanks);

  // convert to json and writes to js file
  let objToJson = JSON.stringify(teamRanks);
  fs.writeFile(
    path.join(__dirname, '../data', 'teamRanks.js'),
    objToJson,
    (err) => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
};
run();
