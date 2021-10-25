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

const freeAgents = myClient.getFreeAgents({
  seasonId: 2021,
  scoringPeriodId: 0,
});

// Writes free agent player data to file
const run = async () => {
  let data = await freeAgents;

  // filter/sort players by percent owned and percent change
  let freeAgentQB = data
    .filter((fa) => fa.player.defaultPosition === 'TQB' && data)
    .sort((a, b) => b.projectedRawStats.passingYards - a.player.passingYards);
  // console.log(freeAgentQB.slice(0, 5));

  // convert to json string and writes to js file
  let objToJson = JSON.stringify(freeAgentQB);
  fs.writeFile(
    path.join(__dirname, '../data', 'freeAgentQB.js'),
    objToJson,
    (err) => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
};

run();
