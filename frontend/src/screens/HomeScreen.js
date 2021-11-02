import React, { useState, useEffect } from 'react';
import Teams from '../components/Teams';
import PopoverInfo from '../components/PopoverInfo';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const HomeScreen = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const teamRanks = await axios.get('/api/teamRanks');
      setTeams(teamRanks.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // popover
  const leagueTitle = 'LeaderBoard';
  const leagueInfo = 'Have a look at the current standings.';

  // Chart

  let teamNames = [];
  let pf = [];
  let pa = [];
  teams.map((x) => teamNames.push(x.name));
  teams.map((x) => pf.push(x.regularSeasonPointsFor));
  teams.map((x) => pa.push(x.regularSeasonPointsAgainst));

  const chart = {
    labels: teamNames,
    datasets: [
      {
        label: 'Points For',
        backgroundColor: '#00008b',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: pf,
      },
      {
        label: 'Points Against',
        backgroundColor: '#8b0000',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: pa,
      },
    ],
  };

  return (
    <>
      <div className='flex'>
        <h1>LEADERBOARD</h1>
        <PopoverInfo info={leagueInfo} title={leagueTitle} />
      </div>
      <Teams teams={teams} loading={loading} />

      <Bar
        data={chart}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
          responsive: true,
        }}
      />
    </>
  );
};

export default HomeScreen;
