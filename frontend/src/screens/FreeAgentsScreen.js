import React, { useState, useEffect } from 'react';
import PopoverInfo from '../components/PopoverInfo';
import WatchList from '../components/WatchList';

import PercentOwned from '../components/PercentOwned';
import FreeAgentQB from '../components/FreeAgentQB';

import axios from 'axios';

const PlayersToWatchScreen = () => {
  const [freeAgents, setFreeAgents] = useState([]);
  const [freeAgentsOwned, setFreeAgentsOwned] = useState([]);
  const [qb, setQB] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const onTheRise = await axios.get('/api/onTheRise');
      const ownedAbove = await axios.get('/api/ownedAbove');
      const qbRanks = await axios.get('/api/freeAgentQB');
      setFreeAgents(onTheRise.data);
      setFreeAgentsOwned(ownedAbove.data);
      setQB(qbRanks.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // popover
  const playersTitle = 'ON THE RISE';
  const playersInfo =
    'Free agents who have a positive percent change above 5% for the week.';
  const percentOwnedTitle = 'Owned Above 50%';
  const percentOwnedInfo =
    'These are players owned by at least 50% of leagues.';
  const qbTitle = 'QBs TO WATCH';
  const qbInfo = 'These are quarterbacks to keep an eye on.';

  return (
    <div>
      <div className='flex'>
        <h1>ON THE RISE</h1>
        <PopoverInfo info={playersInfo} title={playersTitle} />
      </div>
      <WatchList freeAgents={freeAgents} loading={loading} />

      <div className='flex' style={{ paddingTop: '1rem' }}>
        <h1>Owned Above 50%</h1>
        <PopoverInfo info={percentOwnedInfo} title={percentOwnedTitle} />
      </div>

      <PercentOwned freeAgentsOwned={freeAgentsOwned} loading={loading} />

      <div className='flex' style={{ paddingTop: '1rem' }}>
        <h2>QB Watchlist</h2>
        <PopoverInfo info={qbInfo} title={qbTitle} />
      </div>
      <FreeAgentQB qb={qb} loading={loading} />
    </div>
  );
};

export default PlayersToWatchScreen;
