import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import {
  FaBed, FaSearch, FaCrosshairs,
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBox from './components/Navbar';
import FooterBox from './components/Footer';
import CarouselBox from './components/Carousel';
import QuestionSection from './components/QuestionSection';
import BecomeHost from './components/BecomeHost';
import AboutAthiti from './components/AboutAthiti';
import WhyChooseUs from './components/WhyChooseUs';
import CardSection from './components/CardSection';
import SignSection from './components/SignSection';
import Stats from './components/Stats';

function App() {


  return (
    <div style={{ backgroundColor: '#ffffff', color: '#002529', minHeight: '100vh', fontFamily: 'sans-serif', paddingTop: '60px' }}>

      {/* Navbar section */}
      <NavBox />

      {/*  Hero Section */}
      <div className="position-relative w-100 overflow-hidden" style={{ height: '400px', zIndex: 1 }}>
        <div className="position-absolute top-0 start-0 h-100 d-none d-lg-block" style={{ width: '12%', backgroundColor: '#002529', zIndex: 2 }} />
        <img src="/assets/1.jpg" alt="Banner" className="w-100 h-100 position-absolute top-0 start-0" style={{ objectFit: 'cover', zIndex: 1, filter: 'brightness(1.05)' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 2 }} />
        <Container className="position-relative h-100 d-flex flex-column justify-content-center text-center text-white" style={{ zIndex: 3 }}>
          <h1 className="fw-bold display-6 mb-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>Athiti Devo Bhava — Hospitality, Reimagined.</h1>
          <p className="small mb-4 fw-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>Book authentic stays, local food, and trusted rides — all in one seamless experience.</p>
          <div className="d-flex justify-content-center gap-2">
            <Button style={{ backgroundColor: '#002529', border: 'none' }} className=" btn-sm px-4 py-2 fw-semibold"><FaBed /> Explore Stays</Button>
            <Button variant="outline-light" className="btn-sm px-4 py-2 fw-semibold">Become a Host</Button>
          </div>
        </Container>
      </div>

      {/* Search Section */}
      <Container fluid className="px-5 position-relative mb-5" style={{ marginTop: '-60px', zIndex: 10 }}>
        <div className="shadow bg-white text-dark p-4 rounded-4 border mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="d-flex gap-1 mb-3">
            <Button style={{ backgroundColor: '#002529', border: 'none' }} className="text-white btn-sm px-4 py-2 fw-bold rounded-0">Stays</Button>
            <Button variant="light" className="bg-white text-dark btn-sm px-4 py-2 fw-semibold rounded-0 border-bottom">Food</Button>
            <Button variant="light" className="bg-white text-dark btn-sm px-4 py-2 fw-semibold rounded-0 border-bottom">Rides</Button>
          </div>
          <Form>
            <Row className="g-2 align-items-end">
              <Col lg={4} md={12}>
                <Form.Label className="small mb-1 fw-bold text-muted">Location *</Form.Label>
                <InputGroup size="sm"><Form.Control type="text" placeholder="Enter location" /><InputGroup.Text className="bg-white"><FaCrosshairs /></InputGroup.Text></InputGroup>
              </Col>
              <Col lg={2} xs={6}><Form.Label className="small mb-1 fw-bold text-muted">Check-in *</Form.Label><Form.Control size="sm" type="text" defaultValue="16-10-2026" className="text-center" /></Col>
              <Col lg={2} xs={6}><Form.Label className="small mb-1 fw-bold text-muted">Check-out *</Form.Label><Form.Control size="sm" type="text" placeholder="dd-mm-yyyy" className="text-center" /></Col>
              <Col lg={2} xs={6}>
                <Form.Label className="small mb-1 fw-bold text-muted">Adults *</Form.Label>
                <div className="d-flex align-items-center justify-content-between p-1 border rounded bg-light" style={{ height: '31px', fontSize: '0.85rem' }}><Button variant="link" className="p-0 px-2 text-dark text-decoration-none fw-bold">-</Button><span>1</span><Button variant="link" className="p-0 px-2 text-dark text-decoration-none fw-bold">+</Button></div>
              </Col>
              <Col lg={2} xs={6}>
                <Form.Label className="small mb-1 fw-bold text-muted">Children</Form.Label>
                <div className="d-flex align-items-center justify-content-between p-1 border rounded bg-light" style={{ height: '31px', fontSize: '0.85rem' }}><Button variant="link" className="p-0 px-2 text-dark text-decoration-none fw-bold">-</Button><span>0</span><Button variant="link" className="p-0 px-2 text-dark text-decoration-none fw-bold">+</Button></div>
              </Col>
            </Row>
            <Row className="mt-3 justify-content-end"><Col lg={2}><Button style={{ backgroundColor: '#002529', border: 'none' }} className="w-100 btn-sm py-2 fw-bold text-white"><FaSearch /> Search</Button></Col></Row>
          </Form>
        </div>
      </Container>

      {/* Section 4 */}
      <div style={{ backgroundColor: '#002529' }} className="py-4 my-5">
        <Container><Row className="g-3">
          {[{ t: "Everything in one place", d: "Simplify your search by finding every bookable option in one site." },
          { t: "Filter for what you want", d: "Quickly customize results based on your stay, food, and ride preference." },
          { t: "No booking fees", d: "Transparent pricing with clear details before checkout." }].map((item, i) => (
            <Col lg={4} key={i}><div className="bg-white text-dark p-3 rounded shadow-sm d-flex align-items-center gap-3 h-100" style={{ borderLeft: '4px solid #d97736' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ backgroundColor: '#fff3eb', width: '35px', height: '35px', minWidth: '35px', color: '#d97736' }}>✓</div>
              <div><h6 className="fw-bold mb-0 style-desc" style={{ fontSize: '0.88rem', color: '#002529' }}>{item.t}</h6><p className="text-muted mb-0 small" style={{ fontSize: '0.75rem' }}>{item.d}</p></div>
            </div></Col>
          ))}</Row></Container>
      </div>

      {/*  Carousel Section */}

      <CarouselBox />

      {/* Card Section */}
      <CardSection />

      {/* About Athiti Section */}
      <AboutAthiti />

      {/* Stats Section */}
      <Stats />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Sign Section */}

      <SignSection />

      {/* Become Host section */}
      <BecomeHost />


      {/* Question Section */}
      <QuestionSection />

      {/* Footer */}
      <FooterBox />

    </div>
  );
}
export default App;