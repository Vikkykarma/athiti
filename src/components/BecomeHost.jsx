import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const BecomeHost = () => {
  return (
    <div
      style={{ backgroundColor: '#ffffff', color: '#002529' }}
      className='py-5 border-top'
    >
      <Container fluid className='px-5'>
        <div className='mb-4'>
          <span
            className='text-uppercase tracking-wider small fw-bold text-muted'
            style={{ fontSize: '0.75rem' }}
          >
            BECOME A HOST
          </span>
          <h2
            className='fw-bold mt-1 mb-2'
            style={{
              fontFamily: 'serif',
              fontSize: '2.2rem',
              color: '#002529',
            }}
          >
            Start Your Journey With ATHITI
          </h2>
          <p
            className='text-secondary small mb-0'
            style={{ maxWidth: '600px', fontSize: '0.9rem', lineHeight: '1.5' }}
          >
            Join India's fastest-growing hospitality ecosystem. Earn sustainably
            by sharing your homestay, regional food, or reliable rides with
            global travelers.
          </p>
        </div>
        <Row className='g-4'>
          <Col lg={4} md={12}>
            <Card
              style={{ borderRadius: '16px', overflow: 'hidden' }}
              className='border-0 shadow-sm bg-white h-100'
            >
              <div className='position-relative' style={{ height: '230px' }}>
                <img
                  src='/assets/1.jpg'
                  alt='Homestay Host Graphic Layout'
                  className='w-100 h-100'
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className='position-absolute bottom-0 start-0 bg-white ms-3 mb-n3 rounded-circle d-flex align-items-center justify-content-center shadow'
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '2px solid #002529',
                    transform: 'translateY(15px)',
                    zIndex: 10,
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>🏠</span>
                </div>
              </div>

              <Card.Body className='p-4 pt-5 mt-2 d-flex flex-column justify-content-between'>
                <div>
                  <h5
                    className='fw-bold mb-3'
                    style={{ color: '#002529', fontSize: '1.25rem' }}
                  >
                    Become a Homestay Host
                  </h5>
                  <p
                    className='text-secondary mb-4'
                    style={{ fontSize: '0.85rem', lineHeight: '1.6' }}
                  >
                    Open your doors to global travelers and maximize your
                    income. Showcase your unique local culture while providing
                    an unforgettable, authentic stay.
                  </p>
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: '#002529',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                    }}
                    className='px-4 py-2 fw-semibold text-white shadow-sm'
                  >
                    List Your Property
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            <Card
              style={{ borderRadius: '16px', overflow: 'hidden' }}
              className='border-0 shadow-sm bg-white h-100'
            >
              <div className='position-relative' style={{ height: '230px' }}>
                <img
                  src='/assets/2.jpg'
                  alt='Food Partner Graphic Layout'
                  className='w-100 h-100'
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className='position-absolute bottom-0 start-0 bg-white ms-3 mb-n3 rounded-circle d-flex align-items-center justify-content-center shadow'
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '2px solid #002529',
                    transform: 'translateY(15px)',
                    zIndex: 10,
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>🍳</span>
                </div>
              </div>

              <Card.Body className='p-4 pt-5 mt-2 d-flex flex-column justify-content-between'>
                <div>
                  <h5
                    className='fw-bold mb-3'
                    style={{ color: '#002529', fontSize: '1.25rem' }}
                  >
                    Become a Food Partner
                  </h5>
                  <p
                    className='text-secondary mb-4'
                    style={{ fontSize: '0.85rem', lineHeight: '1.6' }}
                  >
                    Share your local flavors with travelers by listing your
                    restaurant, café, or home-cooked meal experience. Grow your
                    customer base and showcase authentic regional cuisine.
                  </p>
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: '#002529',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                    }}
                    className='px-4 py-2 fw-semibold text-white shadow-sm'
                  >
                    Start Selling Food
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            <Card
              style={{ borderRadius: '16px', overflow: 'hidden' }}
              className='border-0 shadow-sm bg-white h-100'
            >
              <div className='position-relative' style={{ height: '230px' }}>
                <img
                  src='/assets/3.jpg'
                  alt='Ride Partner Graphic Layout'
                  className='w-100 h-100'
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className='position-absolute bottom-0 start-0 bg-white ms-3 mb-n3 rounded-circle d-flex align-items-center justify-content-center shadow'
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '2px solid #002529',
                    transform: 'translateY(15px)',
                    zIndex: 10,
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>🚗</span>
                </div>
              </div>

              <Card.Body className='p-4 pt-5 mt-2 d-flex flex-column justify-content-between'>
                <div>
                  <h5
                    className='fw-bold mb-3'
                    style={{ color: '#002529', fontSize: '1.25rem' }}
                  >
                    Become a Ride Partner
                  </h5>
                  <p
                    className='text-secondary mb-4'
                    style={{ fontSize: '0.85rem', lineHeight: '1.6' }}
                  >
                    Offer reliable transportation services to travelers and earn
                    more by providing airport transfers, sightseeing tours,
                    local rides, and outstation travel.
                  </p>
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: '#002529',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                    }}
                    className='px-4 py-2 fw-semibold text-white shadow-sm'
                  >
                    Join as Driver
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BecomeHost;
