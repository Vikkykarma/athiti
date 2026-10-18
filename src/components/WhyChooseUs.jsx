import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaHome, FaLeaf, FaShieldAlt, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div
      style={{ backgroundColor: '#002f2b', color: '#badade', clear: 'both' }}
      className='py-5'
    >
      <Container fluid className='px-5'>
        <div className='mb-4 text-start'>
          <h3
            className='fw-bold mb-2'
            style={{
              fontFamily: 'serif',
              fontSize: '2.2rem',
              color: '#87e1eb',
            }}
          >
            Why Choose Us
          </h3>
          <p
            className='text-secondary small mb-4'
            style={{
              maxWidth: '600px',
              fontSize: '0.92rem',
              opacity: 0.9,
              lineHeight: '1.5',
            }}
          >
            ATHITI connects travelers with trusted local communities, authentic
            hospitality, and meaningful travel experiences across India.
          </p>
        </div>

        <Row className='g-4 justify-content-center'>
          <Col lg={3} md={6} xs={12}>
            <div
              className='bg-white shadow-sm p-4 text-center d-flex flex-column align-items-center h-100'
              style={{
                borderRadius: '16px',
                border: '1px solid #011f00',
                minHeight: '260px',
              }}
            >
              <div
                className='d-flex align-items-center justify-content-center rounded-3 mb-3 shadow-sm'
                style={{
                  backgroundColor: '#f4fbf9',
                  color: '#002529',
                  width: '45px',
                  height: '45px',
                  border: '1px solid #e2f3f0',
                }}
              >
                <FaHome size={18} />
              </div>
              <h6
                className='fw-bold mb-2'
                style={{ fontSize: '0.95rem', color: '#002529' }}
              >
                Authentic Experiences
              </h6>
              <p
                className='text-secondary mb-0'
                style={{
                  fontSize: '0.78rem',
                  lineHeight: '1.6',
                  opacity: 0.85,
                }}
              >
                Discover the true culture, traditions, cuisine, and lifestyle of
                every destination through genuine local experiences curated by
                trusted hosts.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6} xs={12}>
            <div
              className='bg-white shadow-sm p-4 text-center d-flex flex-column align-items-center h-100'
              style={{
                borderRadius: '16px',
                border: '1px solid #f1eae0',
                minHeight: '260px',
              }}
            >
              <div
                className='d-flex align-items-center justify-content-center rounded-3 mb-3 shadow-sm'
                style={{
                  backgroundColor: '#f4fbf9',
                  color: '#002529',
                  width: '45px',
                  height: '45px',
                  border: '1px solid #e2f3f0',
                }}
              >
                <FaUsers size={18} />
              </div>
              <h6
                className='fw-bold mb-2'
                style={{ fontSize: '0.95rem', color: '#002529' }}
              >
                Trusted Community
              </h6>
              <p
                className='text-secondary mb-0'
                style={{
                  fontSize: '0.78rem',
                  lineHeight: '1.6',
                  opacity: 0.85,
                }}
              >
                Connect with verified hosts and reliable local partners
                committed to providing quality hospitality and exceptional guest
                experiences.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6} xs={12}>
            <div
              className='bg-white shadow-sm p-4 text-center d-flex flex-column align-items-center h-100'
              style={{
                borderRadius: '16px',
                border: '1px solid #f1eae0',
                minHeight: '260px',
              }}
            >
              <div
                className='d-flex align-items-center justify-content-center rounded-3 mb-3 shadow-sm'
                style={{
                  backgroundColor: '#f4fbf9',
                  color: '#002529',
                  width: '45px',
                  height: '45px',
                  border: '1px solid #e2f3f0',
                }}
              >
                <FaLeaf size={18} />
              </div>
              <h6
                className='fw-bold mb-2'
                style={{ fontSize: '0.95rem', color: '#002529' }}
              >
                Sustainable Tourism
              </h6>
              <p
                className='text-secondary mb-0'
                style={{
                  fontSize: '0.78rem',
                  lineHeight: '1.6',
                  opacity: 0.85,
                }}
              >
                Support responsible travel that empowers local communities,
                preserves cultural heritage, and promotes environmentally
                conscious tourism.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6} xs={12}>
            <div
              className='bg-white shadow-sm p-4 text-center d-flex flex-column align-items-center h-100'
              style={{
                borderRadius: '16px',
                border: '1px solid #f1eae0',
                minHeight: '260px',
              }}
            >
              <div
                className='d-flex align-items-center justify-content-center rounded-3 mb-3 shadow-sm'
                style={{
                  backgroundColor: '#f4fbf9',
                  color: '#002529',
                  width: '45px',
                  height: '45px',
                  border: '1px solid #e2f3f0',
                }}
              >
                <FaShieldAlt size={18} />
              </div>
              <h6
                className='fw-bold mb-2'
                style={{ fontSize: '0.95rem', color: '#002529' }}
              >
                Safe & Reliable
              </h6>
              <p
                className='text-secondary mb-0'
                style={{
                  fontSize: '0.78rem',
                  lineHeight: '1.6',
                  opacity: 0.85,
                }}
              >
                Travel with confidence through secure bookings, verified
                listings, transparent pricing, and dedicated customer support
                whenever you need assistance.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
