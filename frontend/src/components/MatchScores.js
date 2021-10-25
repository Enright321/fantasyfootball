import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const MatchScores = ({ matchScores, loading }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    matchScores.map((score) => (
      <Row>
        <Col sm={12} md={6} lg={5} xl={5}>
          <Card style={{ padding: '1rem', margin: '1rem' }}>
            <Row>
              <Col style={{ borderRight: '1px solid white' }}>
                <ul className='text-center' style={{ fontSize: '1.2rem' }}>
                  <li style={{ paddingBottom: '1rem' }}>
                    <strong>Home Team Id:</strong> {score.homeTeamId}
                  </li>
                  <li>
                    <strong>Score:</strong> {score.homeScore}
                  </li>
                </ul>
              </Col>
              <Col>
                <ul className='text-center' style={{ fontSize: '1.2rem' }}>
                  <li style={{ paddingBottom: '1rem' }}>
                    <strong>Away Team Id:</strong> {score.awayTeamId}
                  </li>
                  <li>
                    <strong>Score:</strong> {score.awayScore}
                  </li>
                </ul>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ))
  );

export default MatchScores;
