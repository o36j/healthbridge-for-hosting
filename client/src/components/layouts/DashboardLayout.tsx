import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import { FaUser as FaUserIcon, FaSignOutAlt as FaSignOutAltIcon } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-layout">
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={RouterLink} to="/dashboard">HealthBridge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown 
                title={
                  <span>
                    <FaUserIcon className="me-2" />
                    {user?.firstName} {user?.lastName}
                  </span>
                } 
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={RouterLink} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={RouterLink} to="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>
                  <FaSignOutAltIcon className="me-2" />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default DashboardLayout; 