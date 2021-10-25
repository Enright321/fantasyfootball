import React, { useState, useEffect } from 'react';
import PopoverInfo from '../components/PopoverInfo';
import WatchList from '../components/WatchList';
import Pagination from '../components/Pagination';

import PercentOwned from '../components/PercentOwned';
// import FreeAgentQB from '../components/FreeAgentQB';

import axios from 'axios';

const PlayersToWatchScreen = () => {
  const [freeAgents, setFreeAgents] = useState([]);
  const [freeAgentsOwned, setFreeAgentsOwned] = useState([]);
  // const [qb, setQB] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const onTheRise = await axios.get('/api/onTheRise');
      const ownedAbove = await axios.get('/api/ownedAbove');
      // const qbRanks = await axios.get('/api/freeAgentQB');
      setFreeAgents(onTheRise.data);
      setFreeAgentsOwned(ownedAbove.data);
      // setQB(qbRanks.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentFreeAgents = freeAgents.slice(indexOfFirstPost, indexOfLastPost);
  const ownedFreeAgents = freeAgentsOwned.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  // const qbWatch = qb.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // popover
  const playersTitle = 'ON THE RISE';
  const playersInfo =
    'Free agents who have a positive percent change above 5% for the week.';
  const percentOwnedTitle = 'Owned Above 50%';
  const percentOwnedInfo =
    'These are players owned by at least 50% of leagues.';

  return (
    <div>
      <div className='flex'>
        <h1>ON THE RISE</h1>
        <PopoverInfo info={playersInfo} title={playersTitle} />
      </div>
      <WatchList freeAgents={currentFreeAgents} loading={loading} />
      {/* <Pagination
        itemsPerPage={itemsPerPage}
        totalCards={freeAgents.length}
        paginate={paginate}
      /> */}
      <div className='flex' style={{ paddingTop: '1rem' }}>
        <h1>Owned Above 50%</h1>
        <PopoverInfo info={percentOwnedInfo} title={percentOwnedTitle} />
      </div>

      <PercentOwned freeAgentsOwned={ownedFreeAgents} loading={loading} />

      {/* <h2>QB Watchlist</h2> */}
      {/* <FreeAgentQB qb={qbWatch} loading={loading} /> */}

      <Pagination
        itemsPerPage={itemsPerPage}
        totalCards={freeAgentsOwned.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PlayersToWatchScreen;
