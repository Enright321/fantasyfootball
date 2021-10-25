const { Client } = require('espn-fantasy-football-api/node'); // node
const fs = require('fs');
const path = require('path');

const myClient = new Client({ leagueId: 81881363 });
myClient.setCookies({
  espnS2:
    'AEAoBwOTz0IGGwf%2FVxW0M7BlXxJToo%2B0M2IbSZzjScKYN8vn7RbflCIj0MvAHfxfdqc3dOLQWnj5ux0BDj5aCqhX6Wck0XZX9%2FdwuXi1xe1MUiScYzXCrkPuwbQ7lyg9NhmYmZAcXA8YR7qnxM0dM8ypOxTgtf5IR1aG%2BrB0lucl3ensGYLZ9PaY1Xpht%2BA80SZIBVxrIG4MBDbA64czLafCkCAAbmPZ8KXZ2SEsL0A6PKJb5zOVO2y61URsPBp3Qy3Sk0nipoEIOK0wI2jcVU7S',
  SWID: '{A67C2EF6-BF50-4B44-85A4-DBD6DCD98BE1}',
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
  // console.log(newScores);

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
