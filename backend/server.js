import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import teamRanks from './data/teamRanks.js';
import onTheRise from './data/onTheRise.js';
import ownedAbove from './data/ownedAbove.js';
import gameScores from './data/gameScores.js';
import matchScores from './data/matchScores.js';
import freeAgentQB from './data/freeAgentQB.js';

dotenv.config();

const app = express();

app.get('/api/teamRanks', (req, res) => {
  res.json(teamRanks);
});

app.get('/api/onTheRise', (req, res) => {
  res.json(onTheRise);
});
app.get('/api/ownedAbove', (req, res) => {
  res.json(ownedAbove);
});
app.get('/api/gameScores', (req, res) => {
  res.json(gameScores);
});
app.get('/api/matchScores', (req, res) => {
  res.json(matchScores);
});
app.get('/api/freeAgentQB', (req, res) => {
  res.json(freeAgentQB);
});

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
