import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const CarouselBox = () => {
  return (
    <div
      style={{ backgroundColor: '#fff8f2', color: '#002529', clear: 'both' }}
      className='py-4 border-bottom border-top position-relative'
    >
      <Container fluid className='px-lg-5'>
        <Carousel
          indicators={true}
          controls={true}
          interval={4000}
          className='athiti-custom-carousel'
          prevIcon={
            <span
              className='bg-dark rounded-circle d-flex align-items-center justify-content-center text-white'
              style={{ width: '35px', height: '35px', opacity: 0.6 }}
            >
              ‹
            </span>
          }
          nextIcon={
            <span
              className='bg-dark rounded-circle d-flex align-items-center justify-content-center text-white'
              style={{ width: '35px', height: '35px', opacity: 0.6 }}
            >
              ›
            </span>
          }
        >
          <Carousel.Item style={{ backgroundImage: 'url(/assets/1.jpg)' }}>
            <Row className='g-0 align-items-center py-3'>
              <Col
                lg={4}
                md={12}
                className='p-3 text-center text-lg-start d-flex flex-column justify-content-center align-items-center align-items-lg-start'
              >
                <div className='d-flex align-items-center gap-2 mb-2'>
                  <div
                    className='d-flex align-items-center justify-content-center text-white rounded shadow-sm'
                    style={{
                      backgroundColor: '#002529',
                      width: '70px',
                      height: '70px',
                      borderTopLeftRadius: '35px',
                      borderTopRightRadius: '35px',
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>🙏</span>
                  </div>
                  <h1
                    className='fw-bold mb-0 tracking-wider'
                    style={{
                      fontSize: '3rem',
                      fontFamily: 'serif',
                      letterSpacing: '2px',
                      color: '#002529',
                    }}
                  >
                    ATHITI
                  </h1>
                </div>

                <div className='mt-2 text-center text-lg-start'>
                  <h4
                    className='fw-bold text-secondary mb-1'
                    style={{ fontSize: '1.6rem', fontFamily: 'serif' }}
                  >
                    Stay. Dine. Ride.
                  </h4>
                  <h2
                    className='fw-bold'
                    style={{
                      color: '#d97736',
                      fontSize: '2.4rem',
                      fontFamily: 'serif',
                    }}
                  >
                    All in one place.
                  </h2>
                </div>

                <div className='w-100 mt-4 d-none d-lg-block opacity-75'>
                  <span
                    style={{
                      fontSize: '2.5rem',
                      opacity: 0.3,
                      letterSpacing: '4px',
                    }}
                  >
                    🕌🛕🌴🌴
                  </span>
                </div>
              </Col>

              <Col
                lg={8}
                md={12}
                className='d-flex flex-wrap justify-content-center gap-3 align-items-center py-2'
              >
                <div className='text-center'>
                  <div
                    className='overflow-hidden border border-secondary shadow-sm'
                    style={{
                      width: '190px',
                      height: '280px',
                      borderRadius: '100px',
                      borderBottomLeftRadius: '20px',
                    }}
                  >
                    <img
                      src='/assets/2.jpg'
                      alt='Book Hotels Asset'
                      className='w-100 h-100'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className='rounded-circle bg-white border shadow-sm mx-auto d-flex align-items-center justify-content-center mt-n4 position-relative'
                    style={{
                      width: '45px',
                      height: '45px',
                      zIndex: 10,
                      top: '-20px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>🏨</span>
                  </div>
                  <span
                    className='fw-bold text-uppercase d-block mt-n2 tracking-wider'
                    style={{ fontSize: '0.78rem', color: '#002529' }}
                  >
                    Book Hotels
                  </span>
                </div>

                <div className='text-center'>
                  <div
                    className='overflow-hidden border border-secondary shadow-sm'
                    style={{
                      width: '190px',
                      height: '280px',
                      borderRadius: '100px',
                      borderBottomLeftRadius: '20px',
                    }}
                  >
                    <img
                      src='/assets/3.jpg'
                      alt='Order Food Asset'
                      className='w-100 h-100'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className='rounded-circle bg-white border shadow-sm mx-auto d-flex align-items-center justify-content-center mt-n4 position-relative'
                    style={{
                      width: '45px',
                      height: '45px',
                      zIndex: 10,
                      top: '-20px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>🍴</span>
                  </div>
                  <span
                    className='fw-bold text-uppercase d-block mt-n2 tracking-wider'
                    style={{ fontSize: '0.78rem', color: '#d97736' }}
                  >
                    Order Food
                  </span>
                </div>

                <div className='text-center'>
                  <div
                    className='overflow-hidden border border-secondary shadow-sm'
                    style={{
                      width: '190px',
                      height: '280px',
                      borderRadius: '100px',
                      borderBottomLeftRadius: '20px',
                    }}
                  >
                    <img
                      src='/assets/4.jpg'
                      alt='Book Rides Asset'
                      className='w-100 h-100'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className='rounded-circle bg-white border shadow-sm mx-auto d-flex align-items-center justify-content-center mt-n4 position-relative'
                    style={{
                      width: '45px',
                      height: '45px',
                      zIndex: 10,
                      top: '-20px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>🚗</span>
                  </div>
                  <span
                    className='fw-bold text-uppercase d-block mt-n2 tracking-wider'
                    style={{ fontSize: '0.78rem', color: '#002529' }}
                  >
                    Book Rides
                  </span>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item style={{ backgroundImage: 'url(/assets/3.jpg)' }}>
            <Row className='g-0 align-items-center py-3'>
              <Col
                lg={4}
                md={12}
                className='p-3 text-center text-lg-start d-flex flex-column justify-content-center align-items-center align-items-lg-start'
              >
                <div className='d-flex align-items-center gap-2 mb-2'>
                  <div
                    className='d-flex align-items-center justify-content-center text-white rounded shadow-sm'
                    style={{
                      backgroundColor: '#002529',
                      width: '70px',
                      height: '70px',
                      borderTopLeftRadius: '35px',
                      borderTopRightRadius: '35px',
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>🙏</span>
                  </div>
                  <h1
                    className='fw-bold mb-0 tracking-wider'
                    style={{
                      fontSize: '3rem',
                      fontFamily: 'serif',
                      letterSpacing: '2px',
                      color: '#002529',
                    }}
                  >
                    ATHITI
                  </h1>
                </div>

                <div className='mt-2 text-center text-lg-start'>
                  <h4
                    className='fw-bold text-secondary mb-1'
                    style={{ fontSize: '1.6rem', fontFamily: 'serif' }}
                  >
                    Stay. Dine. Ride.
                  </h4>
                  <h2
                    className='fw-bold'
                    style={{
                      color: '#d97736',
                      fontSize: '2.4rem',
                      fontFamily: 'serif',
                    }}
                  >
                    All in one place.
                  </h2>
                </div>

                <div className='w-100 mt-4 d-none d-lg-block opacity-75'>
                  <span
                    style={{
                      fontSize: '2.5rem',
                      opacity: 0.3,
                      letterSpacing: '4px',
                    }}
                  >
                    🕌🛕🌴🌴
                  </span>
                </div>
              </Col>

              <Col
                lg={8}
                md={12}
                className='d-flex flex-wrap justify-content-center gap-3 align-items-center py-2'
              >
                <div className='text-center'>
                  <div
                    className='overflow-hidden border border-secondary shadow-sm'
                    style={{
                      width: '190px',
                      height: '280px',
                      borderRadius: '100px',
                      borderBottomLeftRadius: '20px',
                    }}
                  >
                    <img
                      src='/assets/5.jpg'
                      alt='Book Hotels Asset'
                      className='w-100 h-100'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className='rounded-circle bg-white border shadow-sm mx-auto d-flex align-items-center justify-content-center mt-n4 position-relative'
                    style={{
                      width: '45px',
                      height: '45px',
                      zIndex: 10,
                      top: '-20px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>🏨</span>
                  </div>
                  <span
                    className='fw-bold text-uppercase d-block mt-n2 tracking-wider'
                    style={{ fontSize: '0.78rem', color: '#002529' }}
                  >
                    Book Hotels
                  </span>
                </div>

                <div className='text-center'>
                  <div
                    className='overflow-hidden border border-secondary shadow-sm'
                    style={{
                      width: '190px',
                      height: '280px',
                      borderRadius: '100px',
                      borderBottomLeftRadius: '20px',
                    }}
                  >
                    <img
                      src='/assets/6.jpg'
                      alt='Order Food Asset'
                      className='w-100 h-100'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className='rounded-circle bg-white border shadow-sm mx-auto d-flex align-items-center justify-content-center mt-n4 position-relative'
                    style={{
                      width: '45px',
                      height: '45px',
                      zIndex: 10,
                      top: '-20px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>🍴</span>
                  </div>
                  <span
                    className='fw-bold text-uppercase d-block mt-n2 tracking-wider'
                    style={{ fontSize: '0.78rem', color: '#d97736' }}
                  >
                    Order Food
                  </span>
                </div>

                <div className='text-center'>
                  <div
                    className='overflow-hidden border border-secondary shadow-sm'
                    style={{
                      width: '190px',
                      height: '280px',
                      borderRadius: '100px',
                      borderBottomLeftRadius: '20px',
                    }}
                  >
                    <img
                      src='/assets/1.jpg'
                      alt='Book Rides Asset'
                      className='w-100 h-100'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className='rounded-circle bg-white border shadow-sm mx-auto d-flex align-items-center justify-content-center mt-n4 position-relative'
                    style={{
                      width: '45px',
                      height: '45px',
                      zIndex: 10,
                      top: '-20px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>🚗</span>
                  </div>
                  <span
                    className='fw-bold text-uppercase d-block mt-n2 tracking-wider'
                    style={{ fontSize: '0.78rem', color: '#002529' }}
                  >
                    Book Rides
                  </span>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default CarouselBox;
