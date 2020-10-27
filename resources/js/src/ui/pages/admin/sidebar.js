import React from "react";
import {Nav, Image} from "react-bootstrap";
import { withRouter } from "react-router";
import LogoutButton from "../../components/logout";
import './style/dashboard.css';

const Side = props => {
    const logo = "https://suryapangan.com/image/cache/surya-pangan-logo-retina-600x315.png";
    return (
        <>
        <div className="sticky-top">
            <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/import"
            >

            <div className="text-center">
            <Image
             width={100}
             src={logo} roundedCircle />
            </div>

            <Nav.Item>
                <Nav.Link href="/administration/import">Import Data</Nav.Link>
            </Nav.Item>
            <LogoutButton/>

            </Nav>
            </div>
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar
