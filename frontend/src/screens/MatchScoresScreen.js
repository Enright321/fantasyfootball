import React, { useState, useEffect } from 'react';
import PopoverInfo from '../components/PopoverInfo';
import MatchScores from '../components/MatchScores';
import axios from 'axios';

const MatchScoresScreen = () => {
  const [matchScores, setMatchScores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/matchScores');
      setMatchScores(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // popover
  const matchScoresTitle = 'Matchup Scores';
  const matchScoresInfo = 'The scores from the most recent week';

  return (
    <div>
      <div className='flex'>
        <h1>Match Scores</h1>
        <PopoverInfo info={matchScoresInfo} title={matchScoresTitle} />
      </div>
      <MatchScores matchScores={matchScores} loading={loading} />
    </div>
  );
};

export default MatchScoresScreen;
