import React from 'react';
import { Button, Container } from 'react-bootstrap';

const SignSection = () => {
  return (
    <div style={{ backgroundColor: '#002f2b' }} className='mt-1 py-5'>
      <Container className='px-4'>
        <div
          className=' shadow-sm p-4 text-center border overflow-hidden mx-auto position-relative'
          style={{
            backgroundImage: 'url("/assets/6.jpg")',
            borderRadius: '24px',
            borderColor: '#f1eae0',
            maxWidth: '1200px',
          }}
        >
          <h3
            className='fw-bold mb-2 text-dark fs-3'
            style={{
              fontFamily: 'serif',
              color: '#002529',
              letterSpacing: '0.3px',
            }}
          >
            One account for stays, food & rides
          </h3>

          <p
            className=' small mb-4 mx-auto'
            style={{ maxWidth: '650px', fontSize: '0.88rem', opacity: 1 }}
          >
            Sign in to manage bookings, saved places, offers, and personalized
            experiences across all services.
          </p>

          <div
            className='d-flex justify-content-center gap-3 mb-4 position-relative'
            style={{ zIndex: 5 }}
          >
            <Button
              style={{
                backgroundColor: '#002d33',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
              }}
              className='px-4 py-2 fw-bold text-white shadow-sm'
            >
              Sign in
            </Button>

            <Button
              variant='outline-dark'
              style={{
                borderRadius: '8px',
                fontSize: '0.9rem',
                borderColor: '#002d33',
                color: '#002d33',
              }}
              className='px-4 py-2 fw-bold bg-white'
            >
              Sign up
            </Button>
          </div>

          <div
            className='w-100 overflow-hidden mt-3'
            style={{
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
            }}
          >
            <img
              src=''
              alt='Indian Monument Art Collage'
              className='w-100 mt-2'
              style={{
                height: '110px',
                objectFit: 'cover',
                objectPosition: 'center bottom',
                imageRendering: 'auto',
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignSection;
