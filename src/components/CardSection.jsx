import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CardSection = () => {
  return (
    <div
      style={{ backgroundColor: '#fff8f2', color: '#002529', clear: 'both' }}
      className='py-5 border-top'
    >
      <Container fluid className='px-lg-5'>
        <div className='mb-4'>
          <span
            className='text-uppercase tracking-wider small fw-bold text-muted'
            style={{ fontSize: '0.75rem' }}
          >
            OUR SERVICES
          </span>
          <h2
            className='fw-bold mt-1 mb-2'
            style={{
              fontFamily: 'serif',
              fontSize: '2.2rem',
              color: '#002529',
            }}
          >
            Everything you need for authentic travel
          </h2>
          <p
            className='text-secondary small mb-5'
            style={{ fontSize: '0.95rem', opacity: 0.85 }}
          >
            Discover stays, local food, and trusted rides crafted around Indian
            hospitality.
          </p>
        </div>

        <div className='mb-4 pt-2'>
          <span
            className='text-uppercase tracking-wider small fw-bold text-muted'
            style={{ fontSize: '0.75rem' }}
          >
            DISCOVER INDIA
          </span>
          <h2
            className='fw-bold mt-1 mb-2'
            style={{
              fontFamily: 'serif',
              fontSize: '2.2rem',
              color: '#002529',
            }}
          >
            Discover the Real India With ATHITI
          </h2>
          <p
            className='text-secondary small mb-4'
            style={{ maxWidth: '750px', fontSize: '0.95rem', opacity: 0.85 }}
          >
            Explore authentic homestays, homemade food, and trusted rides
            designed to connect travelers with local communities.
          </p>
        </div>

        <Row className='g-4'>
          <Col lg={4} md={12}>
            <Card
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                minHeight: '420px',
                backgroundImage:
                  'linear-gradient(rgba(0,37,41,0.1), rgba(0,37,41,0.95)), url("/assets/4.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className='border-0 text-white shadow-sm h-100 d-flex flex-column justify-content-between p-4'
            >
              <div
                className='d-flex align-items-center gap-2 bg-white-50 p-2 rounded-3 backdrop-blur'
                style={{
                  width: 'fit-content',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>⛺</span>
                <div
                  style={{ fontSize: '0.75rem', lineHeight: '1.1' }}
                  className='fw-bold'
                >
                  Athiti <br />
                  <span
                    className='fw-normal opacity-75'
                    style={{ fontSize: '0.6rem' }}
                  >
                    Experiences. Local. Comfort.
                  </span>
                </div>
              </div>

              <div className='mt-auto'>
                <h4
                  className='fw-bold mb-2'
                  style={{ fontFamily: 'serif', fontSize: '1.4rem' }}
                >
                  Authentic Local Stays
                </h4>
                <p
                  className='mb-0 opacity-75'
                  style={{ fontSize: '0.8rem', lineHeight: '1.4' }}
                >
                  Stay with local families and experience the warmth of true
                  Indian hospitality.
                </p>
              </div>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            <Card
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                minHeight: '420px',
                backgroundImage:
                  'linear-gradient(rgba(0,37,41,0.1), rgba(0,37,41,0.95)), url("/assets/5.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className='border-0 text-white shadow-sm h-100 d-flex flex-column justify-content-between p-4'
            >
              <div
                className='d-flex align-items-center gap-2 bg-white-50 p-2 rounded-3 backdrop-blur'
                style={{
                  width: 'fit-content',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>⛺</span>
                <div
                  style={{ fontSize: '0.75rem', lineHeight: '1.1' }}
                  className='fw-bold'
                >
                  Athiti <br />
                  <span
                    className='fw-normal opacity-75'
                    style={{ fontSize: '0.6rem' }}
                  >
                    Homemade. Clean. Delicious.
                  </span>
                </div>
              </div>

              <div className='mt-auto'>
                <h4
                  className='fw-bold mb-2'
                  style={{ fontFamily: 'serif', fontSize: '1.4rem' }}
                >
                  Homemade Indian Flavors
                </h4>
                <p
                  className='mb-0 opacity-75'
                  style={{ fontSize: '0.8rem', lineHeight: '1.4' }}
                >
                  Taste authentic regional dishes prepared by passionate local
                  food partners.
                </p>
              </div>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            <Card
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                minHeight: '420px',
                backgroundImage:
                  'linear-gradient(rgba(0,37,41,0.1), rgba(0,37,41,0.95)), url("/assets/6.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className='border-0 text-white shadow-sm h-100 d-flex flex-column justify-content-between p-4'
            >
              <div
                className='d-flex align-items-center gap-2 bg-white-50 p-2 rounded-3 backdrop-blur'
                style={{
                  width: 'fit-content',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>⛺</span>
                <div
                  style={{ fontSize: '0.75rem', lineHeight: '1.1' }}
                  className='fw-bold'
                >
                  Athiti <br />
                  <span
                    className='fw-normal opacity-75'
                    style={{ fontSize: '0.6rem' }}
                  >
                    Trusted. Safe. Local.
                  </span>
                </div>
              </div>

              <div className='mt-auto'>
                <h4
                  className='fw-bold mb-2'
                  style={{ fontFamily: 'serif', fontSize: '1.4rem' }}
                >
                  Trusted Local Rides
                </h4>
                <p
                  className='mb-0 opacity-75'
                  style={{ fontSize: '0.8rem', lineHeight: '1.4' }}
                >
                  Explore destinations safely with trusted drivers and community
                  ride providers.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardSection;
