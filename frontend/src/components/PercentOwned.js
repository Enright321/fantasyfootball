import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WatchList = ({ freeAgentsOwned, loading }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <Row>
        {Object.values(freeAgentsOwned).map((freeAgent) => (
          <Col key={freeAgent.player.id} sm={12} md={6} lg={5} xl={3}>
            <Card className='m-3 p-3 rounded card'>
              <Link to={`/freeAgent/${freeAgent.id}`}>
                <Card.Title className='text-center font'>
                  <strong>{freeAgent.player.fullName}</strong>
                </Card.Title>
              </Link>
              <Card.Body className='text-center'>
                <Card.Title as='div' className='text-center'>
                  <strong>{freeAgent.player.proTeam}</strong>
                </Card.Title>

                <ul>
                  <hr style={{ backgroundColor: 'white' }} />
                  <li className='text-center'>
                    Position: {freeAgent.player.defaultPosition}
                  </li>
                  <hr />
                  <li className='text-center'>
                    % Change: {freeAgent.player.percentChange.toFixed(2)}
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

export default WatchList;
