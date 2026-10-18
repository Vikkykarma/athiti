import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

const AboutAthiti = () => {
  return (
    <div
      style={{ backgroundColor: '#fff8f2', color: '#002529', clear: 'both' }}
      className='py-5'
    >
      <Container fluid className='px-lg-5'>
        <Row className='g-5 align-items-center'>
          <Col lg={6} md={12}>
            <div
              className='p-4 rounded-4 shadow-sm position-relative overflow-hidden d-flex flex-column justify-content-between mx-auto text-dark'
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.92)), url("/assets/3.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '480px',
                maxWidth: '560px',
                border: '1px solid #e2d7c5',
              }}
            >
              <div className='text-center mt-2'>
                <span
                  className='text-uppercase tracking-widest small fw-bold text-muted'
                  style={{ fontSize: '0.7rem' }}
                >
                  🍃 Built Up
                </span>
                <h1
                  className='fw-bold mb-0 text-dark'
                  style={{
                    fontFamily: 'serif',
                    fontSize: '3rem',
                    letterSpacing: '1px',
                  }}
                >
                  Athiti
                </h1>
                <p
                  className='fst-italic mb-3'
                  style={{
                    color: '#d97736',
                    fontSize: '1.05rem',
                    fontWeight: '500',
                  }}
                >
                  More than a stay, it's an experience. ♡
                </p>
              </div>

              <div className='px-3 text-center'>
                <p
                  className='text-secondary mb-4 mx-auto'
                  style={{
                    fontSize: '0.82rem',
                    lineHeight: '1.6',
                    maxWidth: '420px',
                    fontWeight: '500',
                  }}
                >
                  At Athiti, we believe in the warmth of Indian hospitality and
                  the joy of real connections. We bring you authentic homestays,
                  trusted local experiences, and heartfelt moments that stay
                  with you forever.
                </p>
              </div>

              <Row
                className='g-2 text-center border-top border-bottom py-3 my-2 border-secondary-subtle'
                style={{ fontSize: '0.62rem' }}
              >
                <Col xs={3}>
                  <div className='fs-5 mb-1'>🏠</div>
                  <div className='fw-bold text-dark text-uppercase tracking-wider'>
                    Authentic Homestays
                  </div>
                </Col>
                <Col xs={3}>
                  <div className='fs-5 mb-1'>🤝</div>
                  <div className='fw-bold text-dark text-uppercase tracking-wider'>
                    Trusted Partners
                  </div>
                </Col>
                <Col xs={3}>
                  <div className='fs-5 mb-1'>📍</div>
                  <div className='fw-bold text-dark text-uppercase tracking-wider'>
                    Local Experiences
                  </div>
                </Col>
                <Col xs={3}>
                  <div className='fs-5 mb-1'>💎</div>
                  <div className='fw-bold text-dark text-uppercase tracking-wider'>
                    Built on Trust
                  </div>
                </Col>
              </Row>

              <div
                className='text-center fst-italic small fw-bold text-muted mb-1'
                style={{ fontSize: '0.78rem', letterSpacing: '0.5px' }}
              >
                ♡ Athiti - Travel. Experience. Connect. 🌿
              </div>
            </div>
          </Col>

          <Col lg={6} md={12} className='ps-lg-5'>
            <span
              className='text-uppercase tracking-wider small fw-bold text-muted'
              style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}
            >
              ABOUT ATHITI
            </span>

            <h2
              className='fw-bold my-2'
              style={{
                fontFamily: 'serif',
                color: '#002529',
                fontSize: '2.4rem',
                lineHeight: '1.2',
              }}
            >
              Built on the Spirit of "Athiti Devo Bhava"
            </h2>

            <p
              className='text-secondary small mb-4 lh-base'
              style={{ fontSize: '0.92rem', opacity: 0.9 }}
            >
              ATHITI connects travelers with authentic homestays, homemade food,
              and trusted local rides while empowering families and communities
              across India through sustainable tourism.
            </p>

            <div className='d-flex flex-column gap-3'>
              {[
                'Empower Local Families',
                'Promote Sustainable Tourism',
                'Create Authentic Experiences',
                'Support Rural Communities',
              ].map((text, idx) => (
                <div key={idx} className='d-flex align-items-center gap-3'>
                  <div
                    className='rounded-circle d-flex align-items-center justify-content-center text-white'
                    style={{
                      backgroundColor: '#002529',
                      width: '24px',
                      height: '24px',
                      minWidth: '24px',
                      fontSize: '0.7rem',
                    }}
                  >
                    <FaCheck />
                  </div>
                  <span
                    className='fw-semibold'
                    style={{ color: '#002529', fontSize: '0.98rem' }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutAthiti;
