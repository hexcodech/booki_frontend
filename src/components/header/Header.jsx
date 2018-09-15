import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { 
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import userManager from '../../utils/userManager';

import './Header.css';

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleProfileDropdown = this.toggleProfileDropdown.bind(this);
        
        this.state = {
            navbarOpen: false,
            profileDropdownOpen: false,
        };
    }

    toggleNavbar() {
        this.setState({
            navbarOpen: !this.state.navbarOpen,
        });
    }

    toggleProfileDropdown() {
        this.setState({
            profileDropdownOpen: !this.state.profileDropdownOpen,
        });
    }

    render() {
        return (
            <div id="Header">
                <Navbar light color="booki" expand="md">
                    <NavbarBrand tag={Link} to="/" className="mr-5">
                        <img src="/img/logo/logo.svg" alt="Booki Logo"/>
                    </NavbarBrand>
                    <NavbarToggler type="navbar" onClick={this.toggleNavbar} />

                    <Collapse isOpen={this.state.navbarOpen} navbar>
                        <Nav navbar>

                        </Nav>
                        <Form className="flex-grow-1">
                            <InputGroup>
                                <Input type="search" placeholder="" className="border-booki"/>
                                <InputGroupAddon addonType="append">
                                    <Button outline type="submit" color="booki"><FontAwesomeIcon icon={faSearch}/></Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                        <Button outline color="booki" className="mx-3"><Translate value="application.header.sell_books"/></Button>

                        {this.props.user && !this.props.user.expired ?
                            <Dropdown isOpen={this.state.profileDropdownOpen} toggle={this.toggleProfileDropdown}>
                                <DropdownToggle
                                tag="div"
                                onClick={this.toggleProfileDropdown}
                                data-toggle="dropdown"
                                >
                                    <Avatar 
                                    className="header-avatar-booki"
                                    email={this.props.user.profile.private.email} // Gravatar, etc...
                                    name={this.props.user.profile.private.username} // Generate avatar based on initials
                                    maxInitials={2}
                                    size="45px"
                                    round />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>{this.props.user.profile.private.username}</DropdownItem>
                                    <DropdownItem tag={Link} to="/profile"><Translate value="application.header.profile"/></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={() => userManager.signoutRedirect()}><Translate value="application.header.logout"/></DropdownItem>
                                </DropdownMenu>
                            </Dropdown> :
                            <Button outline color="booki" className="mx-3" onClick={() => userManager.signinRedirect()}><Translate value="application.header.login"/></Button>
                        }
                    </Collapse>
                </Navbar>
            </div>
		);
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.oidc.user,
    }
}

export default connect(mapStateToProps, null)(Header);