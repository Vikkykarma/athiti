import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCar, FaHome, FaUtensils } from 'react-icons/fa';

const Stats = () => {
  return (
    <div
      style={{ backgroundColor: '#002529', color: '#ffffff' }}
      className='py-4 text-center shadow-sm mb-1'
    >
      <Container fluid className='px-lg-5'>
        <Row className='g-0 align-items-center'>
          <Col
            xs={4}
            className=' border-end border-secondary border-opacity-25 py-2'
          >
            <div
              className='d-inline-flex align-items-center justify-content-center rounded-3 mb-2 shadow-sm'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                width: '38px',
                height: '38px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <FaHome size={16} className='text-white' />
            </div>
            <div className='fs-3 fw-bold mb-0 lh-1'>3+</div>
            <div
              className='text-white-50 mt-1'
              style={{ fontSize: '0.72rem', letterSpacing: '0.3px' }}
            >
              Verified Homestays
            </div>
          </Col>

          <Col
            xs={4}
            className='border-end border-secondary border-opacity-25 py-2'
          >
            <div
              className='d-inline-flex align-items-center justify-content-center rounded-3 mb-2 shadow-sm'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                width: '38px',
                height: '38px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <FaUtensils size={16} className='text-white' />
            </div>
            <div className='fs-3 fw-bold mb-0 lh-1'>4+</div>
            <div
              className='text-white-50 mt-1'
              style={{ fontSize: '0.72rem', letterSpacing: '0.3px' }}
            >
              Food Partners
            </div>
          </Col>

          <Col xs={4} className='py-2'>
            <div
              className='d-inline-flex align-items-center justify-content-center rounded-3 mb-2 shadow-sm'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                width: '38px',
                height: '38px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <FaCar size={16} className='text-white' />
            </div>
            <div className='fs-3 fw-bold mb-0 lh-1'>2+</div>
            <div
              className='text-white-50 mt-1'
              style={{ fontSize: '0.72rem', letterSpacing: '0.3px' }}
            >
              Trusted Ride Providers
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stats;
