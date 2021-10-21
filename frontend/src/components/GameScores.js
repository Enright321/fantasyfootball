import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Teams = ({ scores, loading }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <Row>
        {Object.values(scores).map((score) => (
          <Col key={score.homeTeam.id} sm={12} md={6} lg={5} xl={5}>
            <Card className='m-3 p-3 rounded card'>
              <Card.Title className='text-center'>
                <strong>{score.startTime}</strong>
              </Card.Title>

              <Card.Body className='text-center'>
                <Card.Title as='div' className='text-center'>
                  <strong>{score.odds}</strong>
                </Card.Title>
                <Row>
                  <Col>
                    <ul>
                      <li className='text-center'>{score.homeTeam.team}</li>
                      <hr />
                      <li className='text-center'>
                        Score: {score.homeTeam.score}
                      </li>
                      <li className='text-center'>
                        Record: {score.homeTeam.record}
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li className='text-center'>{score.awayTeam.team}</li>
                      <hr />
                      <li className='text-center'>
                        Score: {score.awayTeam.score}
                      </li>
                      <li className='text-center'>
                        Record: {score.awayTeam.record}
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

export default Teams;
