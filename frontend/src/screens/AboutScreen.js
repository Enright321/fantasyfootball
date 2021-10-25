import React from 'react';

const AboutScreen = () => {
  return (
    <div className='text-center'>
      <h1>About</h1>
      <p style={{ fontSize: '1.2rem' }}>
        This is a simple app created for learning about the ESPN API. I
        connected to version 3 ESPN fantasy football api using a Javascript API
        wrapper that can be found{' '}
        <a
          style={{ color: 'blue' }}
          target='_blank'
          rel='noreferrer'
          href='https://github.com/mkreiser/ESPN-Fantasy-Football-API'
        >
          here.{' '}
        </a>{' '}
        You can check out this open source project{' '}
        <a
          target='_blank'
          rel='noreferrer'
          style={{ color: 'blue' }}
          href='https://github.com/Enright321/fantasyfootball'
        >
          here.
        </a>{' '}
        ESPN owns all rights to the data used for building this web app.
      </p>
    </div>
  );
};

export default AboutScreen;
