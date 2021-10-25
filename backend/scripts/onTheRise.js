const { Client } = require('espn-fantasy-football-api/node'); // node
const fs = require('fs');
const path = require('path');

const myClient = new Client({ leagueId: 81881363 });
myClient.setCookies({
  espnS2:
    'AEAoBwOTz0IGGwf%2FVxW0M7BlXxJToo%2B0M2IbSZzjScKYN8vn7RbflCIj0MvAHfxfdqc3dOLQWnj5ux0BDj5aCqhX6Wck0XZX9%2FdwuXi1xe1MUiScYzXCrkPuwbQ7lyg9NhmYmZAcXA8YR7qnxM0dM8ypOxTgtf5IR1aG%2BrB0lucl3ensGYLZ9PaY1Xpht%2BA80SZIBVxrIG4MBDbA64czLafCkCAAbmPZ8KXZ2SEsL0A6PKJb5zOVO2y61URsPBp3Qy3Sk0nipoEIOK0wI2jcVU7S',
  SWID: '{A67C2EF6-BF50-4B44-85A4-DBD6DCD98BE1}',
});

const freeAgents = myClient.getFreeAgents({
  seasonId: 2021,
  scoringPeriodId: 0,
});

// Writes free agent player data to file
const run = async () => {
  let data = await freeAgents;

  // filter/sort players by percent owned and percent change

  const percentChange = data
    .filter((fa) => fa.player.percentChange > 5 && data)
    .sort((a, b) => b.player.percentChange - a.player.percentChange);
  // console.log(percentChange);

  // convert to json and writes to json file
  let objToJson = JSON.stringify(percentChange);
  fs.writeFile(
    path.join(__dirname, '../data', 'onTheRise.js'),
    objToJson,
    (err) => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
};

run();
