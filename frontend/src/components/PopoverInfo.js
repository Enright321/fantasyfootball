import { useState, useRef } from 'react';
import { Tooltip, Overlay } from 'react-bootstrap';

const PopoverInfo = ({ info, title }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <div
        style={{ margin: '0 1rem', cursor: 'pointer' }}
        ref={target}
        onClick={() => setShow(!show)}
      >
        <i className='fas fa-info-circle fa-2x'></i>
      </div>
      <Overlay target={target.current} show={show} placement='right'>
        {(props) => (
          <Tooltip id='overlay-example' {...props}>
            <h5 className='font' style={{ padding: '.5rem 1rem' }}>
              {title}
            </h5>
            <p>{info}</p>
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

export default PopoverInfo;
