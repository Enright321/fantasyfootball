import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const FreeAgentQB = ({ qb, loading }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <Row>
        {Object.values(qb).map((freeAgent) => (
          <Col key={freeAgent.player.id} sm={12} md={6} lg={5} xl={3}>
            <Card className='m-3 p-3 rounded card'>
              <Card.Title className='text-center font'>
                <strong>{freeAgent.player.fullName}</strong>
              </Card.Title>

              <Card.Body className='text-center'>
                <Card.Title as='div' className='text-center'>
                  <strong>{freeAgent.player.proTeam}</strong>
                </Card.Title>

                <ul>
                  <hr style={{ backgroundColor: 'white' }} />
                  <li className='text-center'>
                    Passing Yards: {freeAgent.rawStats.passingYards}
                  </li>
                  <li className='text-center'>
                    TD's: {freeAgent.rawStats.passingTouchdowns}
                  </li>
                  <li className='text-center'>
                    Interceptions: {freeAgent.rawStats.passingInterceptions}
                  </li>
                  <li className='text-center'>
                    Rushing Yards: {freeAgent.rawStats.rushingYards}
                  </li>
                  <hr />
                  <li className='text-center'>
                    % Owned: {freeAgent.player.percentOwned.toFixed(2)}
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

export default FreeAgentQB;
