import React from 'react';
import { Row, Col } from 'react-bootstrap';
import teamRanks from '../teamRanks.json';
import Teams from '../components/Teams';

const HomeScreen = () => {
  return (
    <>
      <h1>LEADERBOARD</h1>
      <Row>
        {Object.values(teamRanks).map((item) => (
          <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
            <Teams item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
