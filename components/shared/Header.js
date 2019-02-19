import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const BsNavLink = props => {
  const { route, title } = props;

  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { className } = this.props;

    return (
      <div>
        <Navbar
          className={`port-navbar port-nav-base absolute ${className}`}
          color="transparent" //light
          dark //was light - refers to burger
          expand="md"
        >
          <NavbarBrand className="port-navbar-brand" href="/">
            dux.
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/ecommerce" title="E-Commerce" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/graphic" title="Graphic Design" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/contact" title="Contact Us" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
