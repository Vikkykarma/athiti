import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaInstagramSquare, FaWhatsapp } from 'react-icons/fa';

const FooterBox = () => {
  return (
    <footer
      style={{
        height: '20rem',
        backgroundColor: '#002f2b',
        color: '#ffffff',
        fontSize: '#ffffff',
        boxShadow: 'none',
        border: 'none',
        position: 'relative',
        zIndex: 10,
      }}
      className='pt-4 pb-2 mt-4 h-500'
    >
      <div className='p-4'>
        <Row>
          <Col>
            Athiti
            <p className='mt-2'>
              ATHITI connects travelers with authentic homestays, local food
              experiences, and trusted rides across India.
            </p>
          </Col>
          <Col>
            Quick link
            <div className='mt-2'>
              <p> Become a Homestay Partner</p>
              <p>Become a Food Partner</p>
              <p>Become a Ride Partner</p>
            </div>
          </Col>
          <Col>
            services
            <div className='mt-2'>
              <p>Homestays</p>
              <p>Food</p>
              <p>Rides</p>
            </div>
          </Col>
          <Col>
            About Us
            <div className='mt-2'>
              <p>Privacy policy</p>
              <p>Terms & conditions</p>
              <p>Refund Policy</p>
              <p>Cancellation Policy</p>
              <p>Return Policy</p>
            </div>
          </Col>
          <Col>
            Contact
            <p>@athiti@support.com</p>
            <p>
              <FaInstagramSquare
                size={24}
                style={{ borderRadius: '2rem', color: 'white' }}
              />
            </p>
            <p>
              <FaWhatsapp
                size={24}
                style={{ borderRadius: '2rem', color: 'white' }}
              />
            </p>
          </Col>
        </Row>
      </div>

      <div
        className='text-center pt-2 border-top border-secondary text-white-50 '
        style={{
          height: '3rem',
          fontSize: '0.7rem',
          backgroundColor: '#002f2b',
        }}
      >
        © 2026 Athiti hospitality services private limited. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterBox;
