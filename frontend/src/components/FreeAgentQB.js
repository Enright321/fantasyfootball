import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const FreeAgentQB = ({ qb, loading }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <Row>
        {Object.values(qb).map((freeAgent) => (
          <Col key={freeAgent.id} sm={12} md={6} lg={5} xl={3}>
            <Card className='m-3 p-3 rounded card'>
              <Card.Title className='text-center font'>
                <strong>{freeAgent.fullName}</strong>
              </Card.Title>

              <Card.Body className='text-center'>
                <Card.Title as='div' className='text-center'>
                  <strong>{freeAgent.proTeam}</strong>
                </Card.Title>

                <ul>
                  <hr style={{ backgroundColor: 'white' }} />
                  <li className='text-center'>
                    Position: {freeAgent.defaultPosition}
                  </li>
                  <hr />
                  <li className='text-center'>
                    % Owned: {freeAgent.percentOwned}
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
