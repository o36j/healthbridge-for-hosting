import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import { FaUser as FaUserIcon, FaSignOutAlt as FaSignOutAltIcon } from 'react-icons/fa';
import { ReactNode, useState } from 'react';
import { Link as RouterNavLink } from 'react-router-dom';
import { useAuth as useAuthContext, UserRole } from '../../contexts/AuthContext';
import {
  FaCalendarAlt,
  FaClipboardList,
  FaUserMd,
  FaUser,
  FaCog,
  FaBars,
  FaTimes,
  FaUserInjured,
  FaUsers,
  FaChartLine,
  FaBell,
  FaSearch,
  FaHome,
  FaHospital,
  FaPhone,
  FaEnvelope,
  FaHistory,
  FaTachometerAlt,
  FaInfoCircle,
  FaListAlt,
  FaUserNurse,
  FaEllipsisV,
  FaFileAlt,
  FaUserPlus,
  FaChevronDown,
  FaRegClock,
  FaPills,
  FaChartBar
} from 'react-icons/fa';
import { Container as BootstrapContainer, Row, Col, Button, Dropdown, Badge } from 'react-bootstrap';

interface DashboardLayoutProps {
  children: ReactNode;
}

// Define the props interface for SidebarNavLink component
interface SidebarNavLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

// Custom NavLink component for sidebar navigation
const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, icon, children, className = '' }) => {
  return (
    <Nav.Item as="li">
      <RouterNavLink
        to={to}
        className={({ isActive }) => 
          `px-3 py-2 rounded-3 mb-2 d-flex align-items-center ${
            isActive 
              ? 'bg-primary bg-opacity-10 text-primary fw-semibold' 
              : 'text-secondary'
          } ${className}`
        }
      >
        {icon} {children}
      </RouterNavLink>
    </Nav.Item>
  );
};

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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