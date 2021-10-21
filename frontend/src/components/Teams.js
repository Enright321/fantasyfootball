import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Teams = ({ teams, loading }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <Row>
        {Object.values(teams).map((team) => (
          <Col key={team.id} sm={12} md={6} lg={5} xl={3}>
            <Card className='m-3 p-3 rounded card'>
              <Card.Title className='text-center font'>
                <strong>Position {team.playoffSeed}</strong>
              </Card.Title>
              <Link to={`/team/${team.id}`} className='text-center'>
                <Card.Img src={team.logoURL} className='logo' variant='top' />
              </Link>
              <Card.Body className='text-center'>
                <Link to={`/team/${team.id}`}>
                  <Card.Title as='div' className='text-center'>
                    <strong>{team.name}</strong>
                  </Card.Title>
                </Link>
                <ul>
                  <hr style={{ backgroundColor: 'white' }} />
                  <li className='text-center'>
                    Record: {team.wins} - {team.losses}
                  </li>
                  <hr />
                  <li className='text-center'>
                    Points Scored: {team.totalPointsScored.toFixed(2)}
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

export default Teams;
