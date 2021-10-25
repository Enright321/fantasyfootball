import React, { useState, useEffect } from 'react';
import PopoverInfo from '../components/PopoverInfo';
import Pagination from '../components/Pagination';
import GameScores from '../components/GameScores';
import axios from 'axios';

const GameScoresScreen = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/gameScores');
      setScores(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentScores = scores.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // popover
  const gameScoresTitle = 'Game Scores';
  const gameScoresInfo = 'Here are the updated games scores for the week.';

  return (
    <div>
      <div className='flex' style={{ paddingTop: '1rem' }}>
        <h1>LATEST GAME SCORES</h1>
        <PopoverInfo info={gameScoresInfo} title={gameScoresTitle} />
      </div>
      <GameScores scores={currentScores} loading={loading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalCards={scores.length}
        paginate={paginate}
      />
    </div>
  );
};

export default GameScoresScreen;
