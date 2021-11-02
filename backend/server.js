// import express from 'express';
const express = require('express');
// import dotenv from 'dotenv';
const dotenv = require('dotenv');
// import path from 'path';
const path = require('path');
// import teamRanks from './data/teamRanks.js';
const teamRanks = require('./data/teamRanks');
// import onTheRise from './data/onTheRise.js';
const onTheRise = require('./data/onTheRise');
// import ownedAbove from './data/ownedAbove';
const ownedAbove = require('./data/ownedAbove');
// import gameScores from './data/gameScores.js';
const gameScores = require('./data/gameScores');
// import matchScores from './data/matchScores.js';
const matchScores = require('./data/matchScores');
// import freeAgentQB from './data/freeAgentQB.js';
const freeAgentQB = require('./data/freeAgentQB');

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

__dirname = path.resolve();

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
