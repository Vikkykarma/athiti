import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaBed, FaCar, FaUtensils } from 'react-icons/fa';

const NavBox = () => {
  return (
    <Navbar
      expand='lg'
      bg='white'
      variant='light'
      className='py-2 shadow-sm border-bottom fixed-top'
      style={{ zIndex: 999 }}
    >
      <Container fluid className='px-5'>
        <Navbar.Brand
          href='#'
          className='fw-bold d-flex align-items-center'
          style={{ fontSize: '1.3rem', color: '#002529' }}
        >
          <span className='me-2' style={{ color: '#d97736' }}>
            ⛺
          </span>{' '}
          ATHITI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='athiti-navbar' />
        <Navbar.Collapse id='athiti-navbar' className='justify-content-between'>
          <Nav
            className='mx-auto gap-3 fw-semibold'
            style={{ fontSize: '0.9rem' }}
          >
            <Nav.Link
              href='#'
              className='text-dark border-bottom border-dark border-2'
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#'
              className='text-secondary d-flex align-items-center gap-1'
            >
              <FaBed size={13} /> Stay
            </Nav.Link>
            <Nav.Link
              href='#'
              className='text-secondary d-flex align-items-center gap-1'
            >
              <FaUtensils size={13} /> Food
            </Nav.Link>
            <Nav.Link
              href='#'
              className='text-secondary d-flex align-items-center gap-1'
            >
              <FaCar size={13} /> Ride
            </Nav.Link>
            <Nav.Link href='#' className='text-secondary'>
              About
            </Nav.Link>
          </Nav>
          <div className='d-flex gap-2'>
            <Button variant='outline-dark' className='border-0 fw-bold btn-sm'>
              Login
            </Button>
            <Button variant='outline-dark' className='fw-bold btn-sm'>
              Sign up
            </Button>
            <Button
              style={{ backgroundColor: '#002529', border: 'none' }}
              className='btn-sm fw-bold px-3 text-white'
            >
              Partner With Us →
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBox;
