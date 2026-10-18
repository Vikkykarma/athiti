import React, { useState } from 'react';
import { Button, Collapse, Container } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';

const QuestionSection = () => {
  const [openFaq, setOpenFaq] = useState({});
  const toggleFaq = (index) =>
    setOpenFaq((prev) => ({ ...prev, [index]: !prev[index] }));
  return (
    <div
      style={{ backgroundColor: '#fff8f2', color: '#002529' }}
      className='py-5 border-top'
    >
      <Container style={{ maxWidth: '1000px' }} className='px-4'>
        <h3
          className='text-center fw-bold mb-4'
          style={{ fontFamily: 'serif', color: '#002529', fontSize: '2rem' }}
        >
          Frequently Asked Questions
        </h3>

        <div className='d-flex flex-column gap-3 mb-4'>
          {[
            {
              q: 'What services does your platform offer?',
              a: 'We offer authentic local homestays, homemade regional food delivery/dining, and trusted local ride services all in one app.',
            },
            {
              q: 'How do I create an account?',
              a: "Click on the 'Sign up' button in the top navbar or the 'One Account' banner, enter your details, and verify your phone number.",
            },
            {
              q: 'Is it safe to book through your platform?',
              a: 'Yes, all our hosts, food partners, and drivers are 100% verified with structural safety checks and background verifications.',
            },
            {
              q: 'How do I make a booking?',
              a: 'Select your preferred service (Stays/Food/Rides), enter your location and dates, choose from the available listings, and click secure book.',
            },
          ].map((faq, index) => (
            <div
              key={index}
              className='bg-white shadow-sm p-3 d-flex flex-column justify-content-center'
              style={{
                borderRadius: '20px',
                border: '1px solid #f1eae0',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                className='d-flex justify-content-between align-items-center'
                style={{ cursor: 'pointer' }}
                onClick={() => toggleFaq(index)}
              >
                <h6
                  className='mb-0 fw-semibold ps-2'
                  style={{ fontSize: '0.95rem', color: '#002529' }}
                >
                  {faq.q}
                </h6>

                <div
                  className='rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm'
                  style={{
                    backgroundColor: '#002529',
                    width: '36px',
                    height: '36px',
                    minWidth: '36px',
                    fontSize: '0.85rem',
                  }}
                >
                  {openFaq[index] ? (
                    <FaMinus size={10} />
                  ) : (
                    <FaPlus size={10} />
                  )}
                </div>
              </div>

              <Collapse in={openFaq[index]}>
                <div>
                  <div
                    className='mt-3 pt-2 border-top text-secondary small px-2 fw-medium'
                    style={{ fontSize: '0.85rem', lineHeight: '1.6' }}
                  >
                    {faq.a}
                  </div>
                </div>
              </Collapse>
            </div>
          ))}
        </div>

        <div className='text-center mt-4'>
          <Button
            style={{
              backgroundColor: '#002529',
              border: 'none',
              borderRadius: '30px',
              fontSize: '0.85rem',
            }}
            className='px-4 py-2 fw-semibold text-white shadow-sm d-inline-flex align-items-center gap-2'
          >
            View more FAQs →
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default QuestionSection;
