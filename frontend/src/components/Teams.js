import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Teams = ({ item }) => {
  return (
    <Card className='m-3 p-3 rounded card'>
      <Card.Title className='text-center'>
        <strong>Position {item.playoffSeed}</strong>
      </Card.Title>
      <Link to={`/item/${item.id}`} className='text-center'>
        <Card.Img src={item.logoURL} className='logo' variant='top' />
      </Link>
      <Card.Body className='text-center'>
        <Link to={`/item/${item.id}`}>
          <Card.Title as='div' className='text-center'>
            <strong>{item.name}</strong>
          </Card.Title>
        </Link>
        <ul>
          <hr style={{ backgroundColor: 'white' }} />
          <li className='text-center'>
            Record: {item.wins} - {item.losses}
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Teams;
