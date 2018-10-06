import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Handler from './../kooper/kooper'
import './../App.css';

export default class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            handler: Handler()
        };

        this.menuHandler = this.menuHandler.bind(this);
    }
    
    componentDidMount() {
        this.state.handler.registerMenuHandler(this.menuHandler);
    }

    componentWillUnmount() {
        this.state.handler.unregisterMenuHandler();
    }


    toggle() {
        console.log("toggle");
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    menuHandler(data) {
        // if menu must be opened
        if (data.toOpen === true) {
            if(this.state.isOpen === false) {
                // it will open it only if it is not already open
                this.toggle();
            }
        }

        // if menu must be closed
        if (data.toOpen === false) {
            if(this.state.isOpen === true) {
                // it will close it only if it is not already close
                this.toggle();
            }
        }
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/" className="navbar-link">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/testo" className="navbar-link">Testo</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
