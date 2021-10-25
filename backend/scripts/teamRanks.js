const { Client } = require('espn-fantasy-football-api/node'); // node
const fs = require('fs');
const path = require('path');

const myClient = new Client({ leagueId: 81881363 });
myClient.setCookies({
  espnS2:
    'AEAoBwOTz0IGGwf%2FVxW0M7BlXxJToo%2B0M2IbSZzjScKYN8vn7RbflCIj0MvAHfxfdqc3dOLQWnj5ux0BDj5aCqhX6Wck0XZX9%2FdwuXi1xe1MUiScYzXCrkPuwbQ7lyg9NhmYmZAcXA8YR7qnxM0dM8ypOxTgtf5IR1aG%2BrB0lucl3ensGYLZ9PaY1Xpht%2BA80SZIBVxrIG4MBDbA64czLafCkCAAbmPZ8KXZ2SEsL0A6PKJb5zOVO2y61URsPBp3Qy3Sk0nipoEIOK0wI2jcVU7S',
  SWID: '{A67C2EF6-BF50-4B44-85A4-DBD6DCD98BE1}',
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
